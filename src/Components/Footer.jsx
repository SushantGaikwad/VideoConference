import { useAVToggle } from "@100mslive/react-sdk";
import { useHMSActions } from "@100mslive/react-sdk";
import { BsMicMute,BsMic, BsCameraVideo, BsCameraVideoOff, BsFillChatSquareFill } from "react-icons/bs";
import Chat from "./Chat";
import { useState } from "react";
import "./JoinForm.css";

function Footer() {
  const [chatButton, setChatButton] = useState(false)

    const hmsActions = useHMSActions();
  const {
    isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo
  } = useAVToggle();

  const shareScreen = async ()=>{
    try {
        await hmsActions.setScreenShareEnabled(true);
    } catch (error) {
        console.log(error);
    }
    
  }


  return (
    <div className="control-bar">
      <span className="icons" onClick={toggleAudio}>
        {isLocalAudioEnabled ? <BsMic size={'2.4em'} /> : <BsMicMute  size={'2.4em'}/>}
      </span>
      <span className="icons" onClick={()=> {setChatButton(true)}}>
            <BsFillChatSquareFill size={'2.4em'}/>
      </span>
      <Chat trigger = {chatButton} setTrigger ={setChatButton} chatOpen ={true}>
      </Chat>
      <span className="icons" onClick={toggleVideo}>
        {isLocalVideoEnabled ? <BsCameraVideo size={'2.4em'}/>  :  <BsCameraVideoOff  size={'2.4em'}/>}
      </span>
    </div>
  );
}

export default Footer;
