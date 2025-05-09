import "./App.css";
import ImageSlider from "./ImageSlider";

const IMAGES = [
  `https://picsum.photos/1500/700?random=${Math.floor(Math.random() * 1000)}`,
  `https://picsum.photos/1500/700?random=${Math.floor(Math.random() * 1000)}`,
  `https://picsum.photos/1500/700?random=${Math.floor(Math.random() * 1000)}`,
  `https://picsum.photos/1500/700?random=${Math.floor(Math.random() * 1000)}`,
  `https://picsum.photos/1500/700?random=${Math.floor(Math.random() * 1000)}`,
];

function App() {
  return (
    <main className="App">
      <ImageSlider images={IMAGES} autoSlide autoSlideInterval={3000} />
    </main>
  );
}

export default App;
