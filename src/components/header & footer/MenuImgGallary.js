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
    type: 'Office warehouse',
    link: 'office-warehouse',
  },
  {
    original: img2,
    type: 'Office',
    link: 'office',
  },
  {
    original: img3,
    type: 'Hybrid',
    link: 'hybrid',
  },
  {
    original: img4,
    type: 'Roller doors',
    link: 'roller-doors',
  },
  {
    original: img5,
    type: 'Roller / Office',
    link: 'roller-office',
  },
];

SwiperCore.use([Pagination]);

const MenuImgGallery = () => {
  let history = useHistory();
  const { openAndCloseNavbar } = useGlobalContext();

  const subMenuLinkClickedHandler = (item) => {
    history.push(`/${item}`);
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
                <h5>{swiperItem.type}</h5>
              </div>
            </span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MenuImgGallery;
