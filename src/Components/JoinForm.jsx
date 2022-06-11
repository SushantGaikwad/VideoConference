import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import "./JoinForm.css"

function JoinForm() {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: ""
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let token;

    if(inputValues.token === "SushantMeeting"){
        token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjJhNGEyMTIyNjMwMjIxYzc1YTQzNGNjIiwicm9vbV9pZCI6IjYyYTRhMzE5Yjg3Mzc4N2FhMjcwOGVhZiIsInVzZXJfaWQiOiJtb3Bqb2xscSIsInJvbGUiOiJob3N0IiwianRpIjoiMWU0YTEwOTItNTUyZi00MTllLWJlNjktY2UyZTFiMzhjMTU3IiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImV4cCI6MTY1NTA0MzM1Nn0.SpsybdwhXo4wJGXQ_7rgnoCsz_XGK2ODSRZb8bPI0AI"
    }
    else{
        alert("Wrong Passcode Entered")
    }

    hmsActions.join({
      userName: inputValues.name,
      authToken: token
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{color:"rgb(10,10,10)",fontWeight:"600"} }>Join Sushant Meeting Room</h1>
      <div className="input-container">
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
      </div>
      <div className="input-container">
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="Passcode"
        />
      </div>
      <button className="btn-primary">Join</button>
    </form>
  );
}

export default JoinForm;
