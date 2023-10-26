import React, { Component, useState } from 'react';
import './App.css';
import Home from './components/templates/Home.jsx';
import Modal from './components/templates/Modal';
import Confirm from './components/templates/Confirm';
import {getFriends, inviteFriends} from './service/api_service';

const App = () => {
  const [ friendModal, setFriendModal] = useState(false);
  const [ confirm, setConfirm ] = useState(false);
  const [friends, setFriends] = useState([]);
  const [ message, setMessage ] = useState("");

  const toggleFriendModal = () => {
    setFriendModal(true);
    setConfirm(false)
  }

  const toggleConfirm = () => {
    setConfirm(true);
    setFriendModal(false);
  }

  const goHome = () => {
    setConfirm(false);
    setFriendModal(false);
  }

  const viewFriends = async () => {
    try {
      const data = await getFriends();
      setFriends(data);
      toggleFriendModal();
    } catch (error) {
      console.log(error);
    }
  }

  const invite = async (listOfFriends) => {
    try {
      const data = await inviteFriends(listOfFriends);
      toggleConfirm();
      console.log(data);
      setMessage(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      {(friendModal) ? 
      <Modal toggleFriendModal={toggleFriendModal} goHome={goHome} friends={friends} invite={invite}/> 
    : (confirm) ?
      <Confirm toggle={toggleFriendModal} goHome={goHome} message={message}/>
    : <Home seeFriends={viewFriends}/>
    }
  </div>
  )
}

export default App;
