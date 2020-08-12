import React from "react";
import Slider from "./components/Slider";
import "./App.css";

function App() {
  return (
    <React.Fragment>
        <h1>Carousel slider made in React.js</h1>
        <p>This carousel is created with HTML and CSS styles.</p>
      <Slider
        data={[
          {
            id: "carousel__slide1",
            href1: "#carousel__slide4",
            href2: "#carousel__slide2",
            slideNavigationText: "slide 1"
          },
          {
            id: "carousel__slide2",
            href1: "#carousel__slide",
            href2: "#carousel__slide3",
            slideNavigationText: "slide 2"
          },
          {
            id: "carousel__slide3",
            href1: "#carousel__slide2",
            href2: "#carousel__slide4",
            slideNavigationText: "slide 3"
          },
          {
            id: "carousel__slide4",
            href1: "#carousel__slide3",
            href2: "#carousel__slide1",
            slideNavigationText: "slide 4"
          },
        ]}
      />
    </React.Fragment>
  );
}

export default App;
