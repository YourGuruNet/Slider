import React, { Component } from 'react';


class CarouselSlider extends Component {
   
    render() {
        return (
            <div>
                <h1>Slider carousel made in React </h1>
                <p>This carousel is created with HTML and CSS styles in react app.</p>

                <section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                    <li id="carousel__slide1"
                        tabindex="0"
                        class="carousel__slide">
                    <div className="carousel__snapper">
                        <a href="#carousel__slide4"
                        className="carousel__prev">Go to last slide</a>
                        <a href="#carousel__slide2"
                        className="carousel__next">Go to next slide</a>
                    </div>
                    </li>
                    <li id="carousel__slide2"
                        tabindex="0"
                        class="carousel__slide">
                    <div className="carousel__snapper"></div>
                    <a href="#carousel__slide1"
                        className="carousel__prev">Go to previous slide</a>
                    <a href="#carousel__slide3"
                        className="carousel__next">Go to next slide</a>
                    </li>
                    <li id="carousel__slide3"
                        tabindex="0"
                        class="carousel__slide">
                    <div class="carousel__snapper"></div>
                    <a href="#carousel__slide2"
                        className="carousel__prev">Go to previous slide</a>
                    <a href="#carousel__slide4"
                        className="carousel__next">Go to next slide</a>
                    </li>
                    <li id="carousel__slide4"
                        tabindex="0"
                        className="carousel__slide">
                    <div className="carousel__snapper"></div>
                    <a href="#carousel__slide3"
                        className="carousel__prev">Go to previous slide</a>
                    <a href="#carousel__slide1"
                        className="carousel__next">Go to first slide</a>
                    </li>
                </ol>
                <aside className="carousel__navigation">
                    <ol className="carousel__navigation-list">
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide1"
                        className="carousel__navigation-button">Go to slide 1</a>
                    </li>
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide2"
                        class="carousel__navigation-button">Go to slide 2</a>
                    </li>
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide3"
                        className="carousel__navigation-button">Go to slide 3</a>
                    </li>
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide4"
                        className="carousel__navigation-button">Go to slide 4</a>
                    </li>
                    </ol>
                </aside>
            </section>
               
            </div>
        );
    }
}

export default CarouselSlider;