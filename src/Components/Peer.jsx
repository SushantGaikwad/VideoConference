import { useVideo } from "@100mslive/react-sdk";
import { useHMSStore, selectPeers,selectPeerScreenSharing,selectIsLocalScreenShared,selectScreenShareByPeerID } from '@100mslive/react-sdk';
import "./JoinForm.css";


function Peer({ peer }) {

    // const hmsStore = useHMSStore();
    // const presenter = hmsStore.getState(selectPeerScreenSharing);
    // const screenshareVideoTrack = hmsStore.getState(selectScreenShareByPeerID(presenter.id));
    // const amIScreenSharing = hmsStore.getState(selectIsLocalScreenShared);
    const { videoRef } = useVideo({
    trackId: peer.videoTrack
  });
  return (
    <div className="peer-container">

      <video
        ref={videoRef}
        className={`peer-video ${peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
      />
      <div className="peer-name">
        {peer.name} {peer.isLocal ? "(You)" : ""}
      </div>
    </div>
  );
}

export default Peer;
