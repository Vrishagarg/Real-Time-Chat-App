import {useEffect,useRef,useState} from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat=() => {
   const [open, setOpen]=useState(false);
   const[text, setText]=useState("");
   const endRef=useRef(null)

   useEffect(() =>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
   },[]);

   //the below is the function to concatenate the orevious text with the emoji
   const handleEmoji =e =>{
    setText((prev)=> prev+ e.emoji);
    setOpen(false);
   };
   console.log(text)
    return (
        <div className='chat'>
           <div className="top">
            <div className="user">
              <img src="./avatar.png" alt="" />
              <div className="texts">
                <span>Amit Garg</span>
                <p>I WILL DO IT .</p>
              </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />
            </div>
           </div>
           <div className="center">
        <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
             <p>Hi, How have you been?</p>
             <span>1 min ago</span>

            </div>
        </div>

        <div className="message own">
            
            <div className="texts">
             <p>Hi, How have you been?</p>
             <span>1 min ago</span>

            </div>
        </div>

        <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
             <p>Hi, How have you been?</p>
             <span>1 min ago</span>

            </div>
        </div>

        <div className="message own">
           
            <div className="texts">
             <p>Hi, How have you been?</p>
             <span>1 min ago</span>

            </div>
        </div>

        <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
             <p>Hi, How have you been?</p>
             <span>1 min ago</span>

            </div>
        </div>


        <div className="message own">
           
            <div className="texts">
                <img src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg" alt="" />
             <p>Hi, How have you been?</p>
             <span>1 min ago</span>

            </div>
        </div>
        <div ref={endRef}></div>
           </div>
           <div className="bottom">
           <div className="icons">
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
           </div>
           <input type="text" placeholder="Type a message..." 
           value={text}
           onChange={e=>setText(e.target.value)}/>
           <div className="emoji">
            <img src="./emoji.png"
             alt=""
              onClick={()=> setOpen((prev)=> !prev)}
               />
            {/* the above line means that if the emoji dropdown was closed initially then onclick open it and vice versa */} 

            <div className="picker">

            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            {/* the above line means that when we open the emojiPicker then onClick the emoji handle function should be called which concatenates the text and emoji */}
            </div>
            </div>
            <button className="sendButton">Send </button>
           </div>
        </div>
    );
};

export default Chat