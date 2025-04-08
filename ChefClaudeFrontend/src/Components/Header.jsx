import chef from '../assets/chef-claude-icon.png'
export default function Header(){
    return (
        <header>
            <img className='chefimg' src = {chef}  alt = "chef"/>
            <h1>Chef Claude</h1>
        </header>
    )
}