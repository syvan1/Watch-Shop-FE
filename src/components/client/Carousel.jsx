import React from 'react';
import Slider from 'react-slick';

const similarProducts = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://www.tastingtable.com/img/gallery/19-seafood-chain-restaurants-ranked-worst-to-best/intro-1676388993.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://www.tastingtable.com/img/gallery/the-best-seafood-restaurants-in-america/intro-1647440546.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://koala.sh/api/image/v2-54z41-4w7dl.jpg?width=1344&height=768&dream',
  },
];

const settings = {
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2500,
  cssEase: 'linear',
};

const Carousel = () => {
  return (
    <div className='rounded-md'>
      <Slider {...settings}>
        {similarProducts.map((item, index) => {
          return (
            <img
              key={index}
              className='w-[1244px] h-[450px] rounded-lg'
              src={item.image}
              alt={item.name}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
