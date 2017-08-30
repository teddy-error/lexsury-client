/* eslint-disable quotes */
import React from 'react';
import RoomJoinButton from '../components/RoomJoinButton';
import RoomJoinForm from '../components/RoomJoinForm';
import Shapes from '../components/Shapes';

const homeStyle = {
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
};

// Just for funs :)
const prompts = [
  `I've been meaning to ask you something for a long time now...`,
  `Meeting à gogo`,
  `I hope someone shows up this time!`,
  `As if everyone wasn't on their phone already`,
];
const randomPrompt = prompts[Math.floor(Math.random() * 3)];

function Home() {
  return (
    <div id="homecontainer" style={homeStyle}>
      <Shapes />
      <p id="clickprompt">{randomPrompt}</p>
      <RoomJoinButton />
      <p>- OR -</p>
      <RoomJoinForm />
    </div>
  );
}
export default Home;
