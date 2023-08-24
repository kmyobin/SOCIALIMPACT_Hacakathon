import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EnterpriseContent1 from "./EnterpriseContent1";
import EnterpriseContent2 from "./EnterpriseContent2";
import Footer from '../../layout/Footer';

class EnterpriseContainer extends Component{
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className='relative flex w-full h-full flex-col justify-between'>
        <Slider {...settings}>
          <EnterpriseContent1 />
          <EnterpriseContent2 />
        </Slider>
        <Footer />
      </div>
    );
  }
}

export default EnterpriseContainer
