import React from 'react';
import style from "./Chat.module.css";
import { useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import {
    selectHMSMessages,
    selectBroadcastMessages,
    selectMessagesByRole,
    selectMessagesByPeerID
} from '@100mslive/react-sdk';


function Chat(props) {
    const [ismsg, setisMsg] = React.useState(true);
    const msgendref = React.useRef();

    const hmsActions = useHMSActions();
    const allMessages = useHMSStore(selectHMSMessages); // get all messages
     
   React.useEffect(()=>{

        

   },[])
   
   
   React.useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        // event.preventDefault();
        let msg = document.getElementById("input");
        let message = msg.value;
        msg.value = ""
        hmsActions.sendBroadcastMessage(message); // yes it's that simple 😉
        
    }
    };
   allMessages.length && msgendref.current.scrollIntoView();

   
   let wrapper = document.querySelector("#wrapper");
   let header = document.querySelector("#header");

    allMessages.length && header.addEventListener("mousedown", ()=>{
        header.classList.add(style.active)
    header.addEventListener("mousemove",onDrag);
   })
    allMessages.length && document.addEventListener("mouseup", ()=>{
        header.classList.remove(style.active)
    header.removeEventListener("mousemove",onDrag);
   })

   const onDrag = ({movementX, movementY})=>{

    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${top + movementY}px`;
  }


  document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [allMessages]);

  


  return (props.trigger) ? (
    <>
    <div className={style.popup_messages} >
        <div className={style.popup_inner} id="wrapper">
            <div id="header"><h2>Chat Box</h2></div>
            <div className={style.btn_div}>
                <button className={style.close_popup} onClick={()=> props.setTrigger(false)}>Close</button>
            </div>
                {props.children}
        <div className={style.messages} id="msgdiv">
            {
                allMessages.map((msg)=>{
                    {
                        if(msg.senderName === "You"){
                            return (
                        <div key={msg.id} style={{textAlign:"right"}}>
                            <span style={{fontWeight:"700"}}>{msg.senderName} : </span><br />
                            <span>{msg.message}</span>    
                        </div>
                            )
                        }else{
                            return (
                                <div key={msg.id} style={{textAlign:"left"}}>
                                    <span style={{fontWeight:"700"}}>{msg.senderName} : </span><br />
                                    <span>{msg.message}</span>    
                                </div>
                                    )
                        }
                    }
                })
            }
            <div ref={msgendref}></div>
        </div>

            <input type="text" placeholder='Type' className={style.chat_input} id="input" />                   
    
        </div>
    </div> 
    </>   
  ) : "";
}

export default Chat
