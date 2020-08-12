import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
                <section class="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                  {this.props.data.map(item => {
                    return (<li id={item.id} tabindex="0" class="carousel__slide">
                    <div className="carousel__snapper">
                    <a href={item.href1}
                    className="carousel__prev">Go to last slide</a>
                    <a href={item.href2}
                    className="carousel__next">Go to next slide</a>
                    </div>
                    </li>)
                    
                  })}
                </ol>
                <aside className="carousel__navigation">
                    <ol className="carousel__navigation-list">
                        {this.props.data.map((item, i) => {

                            return (
                                <li className="carousel__navigation-item">
                                <a href={`#carousel__slide${i + 1}`}
                                className="carousel__navigation-button">{item.slideNavigationText}</a>
                            </li>
                            )
                        })}

                    </ol>
                </aside>
            </section> 
        );
    }
}


  

export default Slider;