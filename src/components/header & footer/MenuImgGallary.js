import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/GlobalContext';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import img1 from '../../assests/img/slider-1-popup.jpg';
import img2 from '../../assests/img/slider-2-popup.jpg';
import img3 from '../../assests/img/slider-3-popup.jpg';
import img4 from '../../assests/img/slider-4-popup.jpg';
import img5 from '../../assests/img/slider-5-popup.jpg';

const ImageList = [  
    {
        original: img1,
        text: "Showroom",
        link: "showroom",
    },
    {
        original: img2,
        text: "Strata office suites",
        link: "strata-office-suites",
    },
    {
        original: img3,
        text: "Walk-up office",
        link: "walk-up-office",
    },
    {
        original: img4,
        text: "Two-level hybrid",
        link: "two-level-hybrid",
    },
    {
        original: img5,
        text: "Triple-level hybrid",
        link: "three-level-hybrid",
    },
    {
        original: img5,
        text: "Working plus storage",
        link: "working-storage",
    },
    {
        original: img5,
        text: "Storage complex",
        link: "storage-complex",
    },
];

SwiperCore.use([Pagination]);

const MenuImgGallery = () => {
  let history = useHistory();
  const { openAndCloseNavbar } = useGlobalContext();

  const subMenuLinkClickedHandler = (item) => {
    history.push(`units/${item}`);
    openAndCloseNavbar();
  };

  return (
    <Swiper
      modules={[Pagination]}
      autoplay
      className='menu-carousel-container'
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {ImageList.map((swiperItem, index) => {
        return (
          <SwiperSlide key={index} onClick={openAndCloseNavbar}>
            <span
              className='floorplan-links'
              onClick={() => subMenuLinkClickedHandler(swiperItem.link)}
            >
              <img
                className='d-block w-100'
                src={swiperItem.original}
                alt='First slide'
              />
              <div className='carousel-caption'>
                <h5>{swiperItem.text}</h5>
              </div>
            </span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MenuImgGallery;
