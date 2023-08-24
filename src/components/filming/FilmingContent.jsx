import React, { Component } from "react";
import Slider from "react-slick";
import FilmStart from "./FilmStart";
import Film from "./Film";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="text-black w-full h-full">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <FilmStart handleNext={this.next} />
          <Film />
        </Slider>
        {/* <button className="button" onClick={this.previous}>
          Previous
        </button>
        <button className="button" onClick={this.next}>
          Next
        </button> */}
      </section>
    );
  }
}
