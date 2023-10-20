import React, { Component, useState } from 'react';
import './App.css';
import Home from './components/templates/Home.jsx';
import Modal from './components/templates/Modal';
import {getFriends, inviteFriends} from './service/api_service';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [friends, setFriends] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const viewFriends = async () => {
    try {
      const data = await getFriends();
      setFriends(data);
      setIsModalOpen(!isModalOpen);
    } catch (error) {
      console.log(error);
    }
  }

  const invite = async (listOfFriends) => {
    try {
      const data = await inviteFriends(listOfFriends);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      {isModalOpen ? (
        <Modal toggleModal={toggleModal} friends={friends} invite={invite}/>
      ) : (
        <Home seeFriends={viewFriends}/>
      )}
    </div>
  )
}

export default App;
