import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { links, subMenuLink } from '../../data/Menu';
import { useGlobalContext } from '../../contexts/GlobalContext';
import logo from '../../assests/logo/Viridian_Logo-coloured.svg';
import MenuImgGallery from './MenuImgGallary';

export default function Header() {
  let history = useHistory();

  const { isOpen, openAndCloseNavbar } = useGlobalContext();
  const [isSubMenuShow, setIsSubMenuShow] = useState(false);

  const subMenuLinkClickHandler = () => {
    setIsSubMenuShow(true);
  };

  const subMenuLinkClickedHandler = (item) => {
    history.push(`/units/${item}`)
    setIsSubMenuShow(false);
    openAndCloseNavbar();
  };

  useEffect(() => {}, [isSubMenuShow]);

  let subMenu = (
    <ul className='nav navbar-nav submenu-nav'>
      {subMenuLink.map((menuItem, index) => {
        const { link, text } = menuItem;
        return (
          <li key={index} onClick={() => subMenuLinkClickedHandler(link)}>
            <p className='nav-link'>
              {index + 1}. {text}
            </p>
          </li>
        );
      })}
      <li onClick={() => setIsSubMenuShow(false)}>
        <p className='nav-link'>Back</p>
      </li>
    </ul>
  );

  let Menu = (
    <ul className='nav navbar-nav'>
      {links.map((link) => {
        const { id, href, text } = link;
        if (id === 2) {
          return (
            <li key={2} onClick={subMenuLinkClickHandler}>
              <p className='nav-link units-link'>{text}</p>
            </li>
          );
        } else {
          return (
            <li key={id} onClick={openAndCloseNavbar}>
              <a
                className='nav-link'
                href={`${href}`}
              >
                {text}
              </a>
            </li>
          );
        }
      })}
    </ul>
  );

  return (
    <>
      {isOpen && (
        <aside
          className={`${isOpen ? 'menubar-overlay show' : 'menubar-overlay'}`}
          onClick={openAndCloseNavbar}
        ></aside>
      )}
      <header>
        <nav
          className={`sunday-navbar fixed-bottom ${
            isOpen && 'sunday-navbar-active'
          }`}
        >
          <div className='menu-box'>
            <Row id='mobile-nav'>
              <Col md={7} id='mobile-nav-content'>
                <div className='menu-title'>
                  <img src={logo} alt='logo' />
                </div>
                {isSubMenuShow ? subMenu : Menu}
              </Col>
              <Col lg={2} xl={1} className='empty-box'></Col>
              <Col lg={3} xl={4} className='swiper-col-container'>
                <MenuImgGallery />
              </Col>
            </Row>
          </div>
        </nav>
      </header>
    </>
  );
}
