const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Anthropic = require('@anthropic-ai/sdk');
const { HfInference } = require('@huggingface/inference');

dotenv.config();
const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  };
  
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

app.post('/api/claude', async (req, res) => {
  const { ingredients } = req.body;
  try {
    console.log("Claude endpoint hit with:", req.body);
    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe you'd recommend I make!` }
      ]
    });
    res.json({ recipe: msg.content[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch recipe from Claude' });
  }
});

app.post('/api/mistral', async (req, res) => {
  const { ingredients } = req.body;
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe you'd recommend I make!` }
      ],
      max_tokens: 1024,
    });
    res.json({ recipe: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch recipe from Mistral' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));