import { useAVToggle } from "@100mslive/react-sdk";
import { useHMSActions } from "@100mslive/react-sdk";

function Footer() {
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
      <button className="btn-control" onClick={toggleAudio}>
        {isLocalAudioEnabled ? "Mute" : "Unmute"}
      </button>
      {/* <button className="btn-control" onClick={shareScreen}>
            Screen Share
      </button> */}
      <button className="btn-control" onClick={toggleVideo}>
        {isLocalVideoEnabled ? "Hide" : "Unhide"}
      </button>
    </div>
  );
}

export default Footer;
