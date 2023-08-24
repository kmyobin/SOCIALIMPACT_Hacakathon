import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTemplate from "../layout/PageTemplate";
import Center_1 from "../components/centerList/Center_1";
import Center_2 from "../components/centerList/Center_2";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <PageTemplate
        content={
          <section className="text-black w-full h-full">
            <Slider {...settings}>
              <Center_1 />
              <Center_2 />
            </Slider>
          </section>
        }
      />
    );
  }
}
