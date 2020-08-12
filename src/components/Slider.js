import React, { Component } from "react";
import styled from "styled-components";
import arrowLeft from './images/arrow.png'
import arrowRight from "./images/arrow_2.png"
const Section = styled.section`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;

  &::before,
&::after {
  position: absolute;
  top: 0;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0;
  content: '';
  z-index: 1;
  background-color: black;
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}

&::before {
    left: -1rem; 
    background-image: url("./images/arrow_2.png");
}
&::after {
    background-image: url(${arrowRight});
    right: -1rem;
}
`;

const SliderBody = styled.ol`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow-x: scroll;
    counter-reset: item;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
`;

const SliderNavigation = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;

  ol {
    display: inline-block;
  }
`;

class Slider extends Component {
  render() {
    return (
      <div>
        <h1>Carousel slider made in React.js </h1>
        <p>This carousel is created with HTML and CSS styles in react app.</p>
        <Section aria-label="Gallery">
          <SliderBody>
            {this.props.Test.map((item) => {
              return (
                <li id={item.id} tabindex="0" class="carousel__slide">
                  <div className="carousel__snapper">
                    <a href={item.href1} className="carousel__prev">
                      Go to last slide
                    </a>
                    <a href={item.href2} className="carousel__next">
                      Go to next slide
                    </a>
                  </div>
                </li>
              );
            })}
          </SliderBody>
          <SliderNavigation>
            <ol className="carousel__navigation-list">
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide1"
                  className="carousel__navigation-button"
                >
                  Go to slide 1
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide2" class="carousel__navigation-button">
                  Go to slide 2
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide3"
                  className="carousel__navigation-button"
                >
                  Go to slide 3
                </a>
              </li>
              <li className="carousel__navigation-item">
                <a
                  href="#carousel__slide4"
                  className="carousel__navigation-button"
                >
                  Go to slide 4
                </a>
              </li>
            </ol>
          </SliderNavigation>
        </Section>
      </div>
    );
  }
}

export default Slider;
