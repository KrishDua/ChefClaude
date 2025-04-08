# Chef Claude — AI Recipe Generator

Chef Claude is a full-stack AI-powered web application that takes your available ingredients and generates creative recipes using advanced language models like **Claude 3 Haiku** (via Anthropic API) and **Mixtral-8x7B** (via HuggingFace Inference API). 

Built using **React** on the frontend and **Node.js/Express** on the backend, this app demonstrates secure API integration, smooth client-server communication, and deployment on **Render**.

---

## 🧾 Project Overview

Chef Claude allows users to:
- Dynamically add ingredients
- Fetch a recipe suggestion using Claude or Mistral
- View results in markdown-formatted display
- Switch backend model easily
- Deploy securely with environment variables and backend proxying

The architecture ensures that **no API keys are exposed on the frontend**, as all AI communication happens through a Node.js backend.

---

## Features

- AI-Powered Recipe Generation using Claude & Mistral
- Add, remove, and manage ingredients
- Markdown-rendered recipe output
- Easy toggle between Claude and Mistral APIs
- Secure backend communication (no exposed API keys)
- Fully responsive, works across all devices
- Deployed live via Render

---

## Technologies Used

### Backend

- **Node.js:** JavaScript runtime environment
- **Express.js:** Lightweight server-side framework
- **Anthropic SDK:** Communicate with Claude models
- **HuggingFace Inference:** Generate recipes via Mistral model
- **dotenv:** Handle API keys securely via `.env` file
- **CORS:** Secure cross-origin communication between frontend and backend

### Frontend

- **React.js (Vite):** Fast, modern UI with functional components
- **JavaScript:** Dynamic frontend logic
- **CSS:** Custom responsive styling
- **Markdown rendering:** Easily styled recipe output
- **Fetch API:** Client-server communication using secure backend routes

---
## Live Demo

- **Frontend:** [https://chefclaude-a39i.onrender.com](https://chefclaude-a39i.onrender.com)
- **Backend:** [https://chefclaudebackend.onrender.com](https://chefclaudebackend.onrender.com)
## APIs Used

- [Anthropic Claude 3 API](https://docs.anthropic.com/)
- [HuggingFace Inference API](https://huggingface.co/inference-api)

---

## Acknowledgments

Built by **Krish Dua**  
Inspired by the fusion of AI & culinary creativity
