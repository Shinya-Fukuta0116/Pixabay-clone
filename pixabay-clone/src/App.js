import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from "./ImageGallery";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    // API URL
    const endPointURL = `https://pixabay.com/api/?key=31160812-4df4245b61b79530165117f2d&q=${ref.current.vlaue}&image_type=photo`;
    // APIを叩く(データフェッチング)
    fetch(endPointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });

  }

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
