/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";
//props
//number of Slides +> định nghĩa số lượng slide của carousel
// carousel => numberOfSlides = 3 => carousel show 3 item 1 lüc
// carousel => numberOfSlides = 1 => carousel show 1 item 1 lüc

export default function Carousel({
  numberOfSiles = 1,
  category = "Trending",
  autoplay = false,
}) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    //await đợi res trả về
    const res = await axios.get(
      "https://662b9b55de35f91de158d8ba.mockapi.io/Movie"
    );
    console.log(res.data);
    setMovies(res.data);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {/*
    toán tử 3 ngôi => khu 1 ? khu 2 : Khu 3
    Khu 1 : điều kiện
    Khu 2 : nếu đúng => khu 2
    Khu 3 : nếu sai => khu 3
  */}
      <Swiper
        slidesPerView={numberOfSiles}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={
          autoplay
            ? [Autoplay, Pagination, Navigation]
            : [Pagination, Navigation]
        }
        className={`carousel ${numberOfSiles > 1 ? "multi-item" : ""}`} //toán tử 3 ngôi
      >
        {/*cứ mỗi movie ở trong moives => SwiperSlide*/}
        {/*movie => SwiperSlide*/}
        {/*object ==> componet*/}
        {/* map biến thàng từng thằng từng thằng trong data*/}
        {/*cứ mỗi moive => biến nó thành SwiperSlide*/}

        {/*fiter (phía trong là điều kiện lọc) lọc chỉ lấy category*/}
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide>
              <img className="carousel__img" src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
