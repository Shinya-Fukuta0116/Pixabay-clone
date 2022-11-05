import './App.css';
import imageGallery from './imageGallery';

function App() {
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form>
        <input type="text" placeholder="画像を探す" />
      </form>
      <imageGallery />
    </div>
  );
}

export default App;
