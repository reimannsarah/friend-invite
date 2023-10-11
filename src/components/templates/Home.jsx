import React from "react";
import Button from "../atoms/Button";

const Home = ({toggleModal}) => {
  return (
    <div>
      <h1 className="App-title">Home</h1>
      <Button children={"Invite Friends"} className={"btn btn-primary"} onClick={toggleModal}/>
    </div>
  )
}
  
export default Home;
    