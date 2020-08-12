import React from 'react';
import Slider from './components/Slider'
import './App.css';

function App() {
  
  return (
    <Slider Test={ [
      {
         "id": "carousel__slide1",
          "href1": "#carousel__slide4",
          "href2": "#carousel__slide2",
      },
      {
          "id": "carousel__slide2",
           "href1": "#carousel__slide",
           "href2": "#carousel__slide3",
       },
       {
          "id": "carousel__slide3",
           "href1": "#carousel__slide2",
           "href2": "#carousel__slide4",

       },
       {
          "id": "carousel__slide4",
           "href1": "#carousel__slide3",
           "href2": "#carousel__slide1",
       },
      
  ]} />
  );
}

export default App;
