import profilePic from "../assets/Pic.jpg"

function Card (){
    return (
        <div className="new-page card">
         <img src={profilePic} alt="Profile Picture" />
         <h3>The_IsaacAgboola</h3>
         <p>I love making awesome professional websites for the best companies in the world</p>
        
        </div>
    )
}
export default Card;