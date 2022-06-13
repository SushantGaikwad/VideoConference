import { useAVToggle } from "@100mslive/react-sdk";
import { useHMSActions } from "@100mslive/react-sdk";
import { BsMicMute,BsMic, BsCameraVideo, BsCameraVideoOff } from "react-icons/bs";
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

  const openMessage = ()=>{
    alert("This is Message")
  }

  return (
    <div className="control-bar">
      <span className="icons" onClick={toggleAudio}>
        {isLocalAudioEnabled ? <BsMic size={'2.4em'} /> : <BsMicMute  size={'2.4em'}/>}
      </span>
      <button className="btn-control" onClick={()=> {setChatButton(true)}}>
            Chat Open
      </button>
      <Chat trigger = {chatButton} setTrigger ={setChatButton}>
      </Chat>
      <span className="icons" onClick={toggleVideo}>
        {isLocalVideoEnabled ? <BsCameraVideoOff  size={'2.4em'}/> : <BsCameraVideo size={'2.4em'}/>}
      </span>
    </div>
  );
}

export default Footer;
