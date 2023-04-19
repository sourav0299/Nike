import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return (
    <div>
      <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1c2dfd0c-cd48-46c4-829a-4b5d93f27f83/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png" />
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e895767f-9c79-47d7-93c5-d42d31ee0393/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png" />
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0f01feae-e8f2-4c4c-bf4a-d243a0d6e65a/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png" />
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8f0c0a48-a31b-4bf4-88c2-7cb2081203ad/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png" />
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/71fcee3e-07d3-4cbf-bf2f-b20dbc9de658/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png" />
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0b9cf205-0f71-4911-9b48-cef54cd08021/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png" />
            </Carousel>
        </div>
    </div>
  )
}

export default ProductDetailsCarousel
