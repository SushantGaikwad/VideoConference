import {React,useEffect} from 'react';
import './App.css';
import JoinForm from './Components/JoinForm';
import Conference from "./Components/Conference";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {

  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
  <Header />
        {isConnected ? (
          <>
        <Conference />
        <Footer />
          </>
      ) : (
        <JoinForm />
      )}
    </div>
  );
}

export default App;
