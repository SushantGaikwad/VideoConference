import {
    selectIsConnectedToRoom,
    useHMSActions,
    useHMSStore
  } from "@100mslive/react-sdk";
  import React from "react";
import Timer from "./Timer";
  
  function Header() {
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hmsActions = useHMSActions();

    

  
    return (
      <header>
        <img
          className="logo"
          src="./Video.png"
          alt="logo"
        />
        {isConnected && (

            <div>
            <Timer />
          <button
            id="leave-btn"
            className="btn-danger"
            onClick={() => hmsActions.leave()}
          >
            Leave Room
          </button>
            </div>

        )}
      </header>
    );
  }
  
  export default Header;
  