import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player';

function App() {
  const[songs]=useState([
    {
      title:"song1",
      src:"/Music/song1.mp3"
    },
    {
      title:"song2",
      src:"/Music/song2.mp3"
    },
    {
      title:"song3",
      src:"/Music/song3.mp3"
    },
    {
      title:"song4",
      src:"/Music/song4.mp3"
    },
    {
      title:"song5",
      src:"/Music/song5.mp3"
    }
    
  ]);
  const[currentSongIndex,setCurrentSongIndex]=useState(0);
  const[nextSongIndex,setNextSongIndex]=useState(currentSongIndex+1);
  useEffect(()=>{
     setNextSongIndex(()=>{
      if (currentSongIndex+1>songs.length-1){
        return 0;
      }else {
        return currentSongIndex+1;
      }
     });
  },[currentSongIndex]);
  return (
    <div className='App'>
      <Player 
   currentSongIndex={currentSongIndex}
   setCurrentSongIndex={setCurrentSongIndex}
   nextSongIndex={nextSongIndex}
   songs={songs}
      />
    </div>
  );
}

export default App;
