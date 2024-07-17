import Carousel from "../../components/carousel";

function HomePage() {
  return (
    <div>
      <Carousel autoplay />
      <Carousel numberOfSiles={6} category="Comedy" />
    </div>
  );
}

export default HomePage;
