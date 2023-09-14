import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import inviteCandidates from './inviteCandidates.js';
import Home from './components/templates/Home.jsx';
import Modal from './components/templates/Modal';

// You can use mock data for building components, then wire up to API later
console.log("inviteCandidates: ", inviteCandidates)

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen ? (
        <Modal />
      ) : (
        <Home toggleModal={toggleModal}/>
      )}
    </div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <Home />
//     );
//   }
// }

export default App;
