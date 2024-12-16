import React from "react";
import Carousel from "./Components/Carousel";

const images = [
  {
    id: "1",
    src: "https://cdn.pixabay.com/photo/2023/12/20/07/04/clouds-8459053_1280.jpg",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1550326897-59b13e651fcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    src: "https://t3.ftcdn.net/jpg/06/37/91/58/360_F_637915894_xioRfH3tMwJ7EopQqoGCe5dkzjPYMJLx.jpg",
  },
  {
    id: "4",
    src: "https://4kwallpapers.com/images/walls/thumbs_3t/3644.jpg",
  },
  {
    id: "5",
    src: "https://4kwallpapers.com/images/walls/thumbs_3t/3604.jpg",
  },
];
const App = () => {
  return (
    <div>
      <h1>Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default App;
