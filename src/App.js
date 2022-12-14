import React, {useState} from "react";
import './App.css';

function App() {

  var emojis ={
    "π":"Smiling",
    "π":"Laughing",
    "π±":"8-Ball",
    "π":"Thumbsup",
    "π":"Thumbsdown",
    "π₯":"Goldmedal",
    "π―":"100",
    "π©Ή":"Bandage",
    "π¦":"Zebra",
    "π₯":"Boxing",
    "π":"Rugby",
    "π₯":"Baseball",
    "π":"Basketball",
    "β½":"Football",
    "β‘":"Zap",
    "πΊοΈ":"World Map",
    "β":"Check mark",
    "π":"Ambulance",
    "π":"Wind Chime",
    "πͺ":"Yo Yo"

  };
  const [keylist, setKeylist] = useState(Object.keys(emojis));
  const [message,setMessage] = useState("Enter an emoji");

  //setKeylist(Object.keys(emojis));

function answerfinder(event){
  var msg = event.target.value;
  setMessage(msg);
  if(msg in emojis){
    setMessage(emojis[msg]);
  }
  else{
    setMessage("Sorry! even we dont know what this means");
  }
};

function emojihandler(emoji){
  //console.log(emoji);
  setMessage(emojis[emoji]);
  console.log(message);
}
 return (
    <>
    <div className={"parentConttainer"}>
    <div style={
      {fontSize:"2rem", padding:"10px", boxSizing:"border-box",textAlign:"center"}}>
        Emoji interpreter</div>
    
    <div ><input style={{height:"10vh",width:"50%",padding:"10px",textAlign:"center",
     position:"relative",left:"25%",fontSize:"35px", backgroundColor:"#71f"}} 
    type={"text"} placeholder={"Enter emoji"} onChange={answerfinder} ></input></div>

    <div style={{fontSize:"25px", padding:"10px",textAlign:"center"}}>{message}</div>

    <div  style={{textAlign:"center"}}>
    {keylist.map(element => {
      
      return(
        
      <span style={{padding:"10px",fontSize:"2rem",textAlign:"center",cursor:"pointer"}}
      key={element}
      onClick={()=> emojihandler(element)}
      >{element}</span>
      
      );
    }
    )};
    </div>
    </div>
    </>
  );
}

export default App;
