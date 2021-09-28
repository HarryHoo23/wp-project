import React from 'react';
import { Col } from 'react-bootstrap';
import { links } from '../../data/Menu';
import { useGlobalContext } from '../../contexts/GlobalContext';
import logo from '../../assests/logo/Viridian_Logo-coloured.svg';

export default function Header() {
  const { isOpen, openAndCloseNavbar } = useGlobalContext();

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
            <Col md='12' id='mobile-nav-content'>
              <div className='menu-title'>
                <img src={logo} alt='logo' />
              </div>
              <ul className='nav navbar-nav'>
                {links.map((link) => {
                  const { id, href, text } = link;
                  return (
                    <li key={id} onClick={openAndCloseNavbar}>
                      <a className='nav-link' href={href}>
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </div>
        </nav>
      </header>
    </>
  );
}
