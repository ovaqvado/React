import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Photo } from './components/Photo/Photo';
import Button from '@mui/material/Button';
import { Counter } from './components/Counter/Counter';

function App() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(setPhotos)
  }, [])

  return (
    <div className="App">
      <Button variant="contained">Contained</Button>
      <div>
        {/* {photos.map(photo => <Photo url={photo.url} />)} */}
        <Counter add={2} />
        <img />
      </div>
    </div>
  );
}

export default App;
