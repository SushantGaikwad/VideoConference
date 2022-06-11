import React from "react";
import { useHMSActions } from "@100mslive/react-sdk";

const Timer = ()=>{

    const hmsActions = useHMSActions();
    const [sec, setSec] = React.useState(0);
    const [min, setMin] = React.useState(0);
    const [hr, setHr] = React.useState(0);



    let timer;
    React.useEffect(()=>{

        timer = setInterval(()=>{
    
            setSec(sec+1);

            // if(sec ===10){
            //     hmsActions.leave();
            // }
         
            if(sec === 59){
                setMin(min+1);
                setSec(0);
            }
            if(min === 59){
                setHr(hr+1);
                setMin(0);
            }

        },1000);

        return ()=>{
            clearInterval(timer);
        }

    });



    const formatTime = (time) => {
        return String(time).padStart(2, '0')
      }



return(
    <>
    <span className="timer">{formatTime(hr)} : {formatTime(min)} : {formatTime(sec)}</span>
    </>
)

}

export default Timer;