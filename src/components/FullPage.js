import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import SectionWrapper from './SectionWrapper';
import { hrefLinks } from '../data/Menu';
import { fixtures_type, sale_contacts } from '../data/Content';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useGlobalContext } from '../contexts/GlobalContext';
import Navbar from './header & footer/Navbar';
import TopNavbar from './header & footer/TopNavbar';
import Title from './pages-components/Title';
import { svgImagePath } from '../data/ImageList';
import ImageGallary from './ImageGallary';
import HomeVideo from '../video/Sunday-Hero-Video.mp4';
import LogoContainer from './pages-components/LogoContainer';
import LogoModalContent from './pages-components/LogoModalContent';
import GeneralModal from './pages-components/GeneralModal';
import ContactForm from './pages-components/ContactForm/ContactForm';
import FixtureList from './pages-components/FixtureList';
import DoorStepAccordion from './pages-components/DoorStepAccordion';
import Sale from './pages-components/Sale';
import CommercialUnits from './pages-components/CommercialUnits';
import Financial from './pages-components/Financial';
import Map from './pages-components/Map';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assests/logo/Viridian_Logo-white.svg';
import arrow from '../assests/img/download-2.png';
import fullScreen from '../assests/img/icons/lightbox-expand.svg';


const Fullpage = () => {
  const {
    isLoading,
    setIsLoading,
    individualModalContent,
    handleLogoModalClickOpen,
    isModalShow,
    singleFixtureModalContent,
    handleFixtureModalClickOpen,
    setIsOpen,
  } = useGlobalContext();

  const history = useHistory();
  const [showLoadingClass, setShowLoadingClass] = useState('');
  const [showImgClass, setShowImgClass] = useState('');
  const [error, setError] = useState('');
  const { logout } = useAuth();

  const [name, setName] = useState([
    { id: 1, className: '' },
    { id: 2, className: '' },
    { id: 3, className: '' },
    { id: 4, className: '' },
    { id: 5, className: '' },
    { id: 6, className: '' },
    { id: 7, className: '' },
    { id: 8, className: '' },
    { id: 9, className: '' },
    { id: 10, className: '' }
  ]);

  const [navBarTitle, setNavBarTitle] = useState({
    bgColorClass: '',
    title: 'Commercial Units',
    topTitle: '',
  });

  function renderModalContent() {
    if (isModalShow.case === 1) {
      return <LogoModalContent {...individualModalContent} />;
    } else if (isModalShow.case === 2) {
      return <ContactForm />;
    } else {
      return <FixtureList {...singleFixtureModalContent} />;
    }
  }

  function changeArrow() {
    let image_gallery_icons = document.getElementsByClassName(
      'image-gallery-icon'
    );
    for (let i = 0; i < image_gallery_icons.length; i++) {
      image_gallery_icons[i].innerHTML = `<img src=${arrow} alt="arrow" />`;
    }

    let fullscreenButtons = document.getElementsByClassName(
      'image-gallery-fullscreen-button');
    for (let i = 0; i < fullscreenButtons.length; i++) {
      fullscreenButtons[
        i
      ].innerHTML = `<img src=${fullScreen} alt="fullScreen" />`;
    }
  }

  useEffect(() => {
    async function handleLogOut() {
      setError('');
      try {
        await logout();
        console.log(error);
        setIsOpen(false);
        history.pushState('/login');
      } catch {
        setError('Unable to log out.');
      }
    }
    const timeout = setTimeout(() => {
      handleLogOut();
    }, 1000 * 60 * 60 * 10);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    changeArrow();
    setIsLoading(false);
    setShowLoadingClass('show');
    const first_timeout = setTimeout(() => {
      setShowImgClass('fadeIn');
    }, 2000);
    const second_timeout = setTimeout(() => {
      setShowLoadingClass('');
      setShowImgClass('fadeOut');
    }, 5000);

    return () => clearTimeout(first_timeout, second_timeout);
  }, []);

  return (
    <>
      { !isLoading && (
        <div id='preloader' className={`${showLoadingClass}`}>
          <img src={logo} alt='Sunday' className={`${showImgClass}`} />
        </div>
      )}
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000} /* Options here */
        // sectionsColor={['orange', 'purple', 'green']}
        navigation={false}
        anchors={[
          'wf-home',
          'comercial-units',
          'intro',
          'every',
          'partners',
          'fixtures',
          'doorsteps',
          'financial',
          'maps',
          'contact-us',
          'disclaimer',
        ]}
        autoScrolling={true}
        scrollBar={true}
        normalScrollElements={'.sale-intro'}
        // normalScrollElements: '.vs-img, .sale-intro, #map',
        touchSensitivity={15}
        fitToSection={true}
        afterLoad={() => {
          for (let i = 0; i < hrefLinks.length; i++) {
            if (document.body.classList.contains(hrefLinks[i].link)) {
              let newArr = [...name];
              newArr[i].className = 'show';
              setName(newArr);
              setNavBarTitle({
                bgColorClass: hrefLinks[i].bgColorClass,
                title: hrefLinks[i].title,
                topTitle: hrefLinks[i].topTitle,
              });
            }
          }
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Navbar
                title={navBarTitle.title}
                additionClass={navBarTitle.bgColorClass}
              />
              <TopNavbar
                heading={navBarTitle.topTitle}
                addtionalClass={navBarTitle.bgColorClass}
              />

              <GeneralModal renderBodyComponent={renderModalContent()} />

              {/* First Section */}
              <SectionWrapper class={'section'} idName={'wf-home'}>
                <div className='home-video'>
                  <video loop autoPlay muted id='home-bg-video'>
                    <source src={HomeVideo} type='video/mp4' />
                  </video>
                </div>
              </SectionWrapper>

              <SectionWrapper class={'section'} idName={'commercial-units'}>
                <div className='bg-wrapper'>
                  <CommercialUnits />
                </div>
              </SectionWrapper>

              <SectionWrapper class={'section'} idName={'home-modal'}>
                <div
                  id='home-modal-container'
                  className={name[1].className}
                ></div>
              </SectionWrapper>

              <SectionWrapper class={'section'} idName={'sunday-everyday'}>
                <Row className='sd-everyday-row'>
                  <Col lg={3} md={4} className='sunday-paragraph'>
                    <Title
                      colorClassName=''
                      firstHalfTitle='About'
                      secondHalfTitle='Development.'
                    />

                    <p style={{ paddingTop: '18px', marginBottom: '30px' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat neque iure quasi, impedit delectus quisquam iusto
                      hic ipsum vel nam aspernatur voluptatem, vero voluptas.
                      Quae alias dignissimos officia. Corporis, quo!
                    </p>
                  </Col>
                  <Col lg={9} md={8} className='sunday-everyday-carousel-box'>
                    <ImageGallary />
                  </Col>
                </Row>
              </SectionWrapper>

              <SectionWrapper class={'section'} idName={'sunday-partners'}>
                <div className='bg-wrapper'>
                  <Title
                    colorClassName='white-title'
                    firstHalfTitle='Creative'
                    secondHalfTitle='partners.'
                  />
                  <Row className='logo-row'>
                    {svgImagePath.map((svgImage, index) => {
                      return (
                        <Col
                          key={index}
                          md={4}
                          role='button'
                          onClick={() => handleLogoModalClickOpen(index)}
                        >
                          <LogoContainer bgImg={svgImage} alt='logo-img' />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </SectionWrapper>

              {/* <SectionWrapper class={'section'} idName={'floor-plans'}>
              <div className='bg-wrapper'>
                <Title
                  colorClassName='white-title'
                  firstHalfTitle='The Siteplan.'
                  secondHalfTitle=''
                />
                <Siteplan />
              </div>
            </SectionWrapper> */}

              {/* <SectionWrapper class={'section'} idName={'unit-sitemap'}>
              <div className='bg-wrapper'>
                <Title
                  colorClassName='white-title'
                  firstHalfTitle='Units'
                  secondHalfTitle=''
                />
                <UnitDropdown />
                <SingleUnit />
              </div>
            </SectionWrapper> */}

              <SectionWrapper class={'section'} idName={'fixtures-finishes'}>
                <div className='bg-wrapper'>
                  <Title
                    colorClassName='white-title'
                    firstHalfTitle='Fixtures'
                    secondHalfTitle='& finishes.'
                  />
                  <Row>
                    {fixtures_type.map((fixture, index) => {
                      return (
                        <Col
                          key={fixture.id}
                          md={3}
                          sm={6}
                          onClick={() => handleFixtureModalClickOpen(index)}
                        >
                          <div className='fixture-box'>
                            <div className='fixture-type'>
                              <p>{fixture.type}</p>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </SectionWrapper>

              <SectionWrapper class={'section'} idName={'doorstep-1'}>
                <div className={`doorstep-container ${name[5].className}`}>
                  <DoorStepAccordion />
                </div>
              </SectionWrapper>

              <SectionWrapper class={'section'} idName={'wf-financial'}>
                <div className='bg-wrapper'>
                  <Financial />
                </div>
              </SectionWrapper>

              <SectionWrapper class={'section'} idName={'wf-map'}>
                <div className="bg-wrapper">
                  <Map />
                </div>
              </SectionWrapper>

              <SectionWrapper class={'section'} idName={'wf-contact-us'}>
                <div className='bg-wrapper'>
                  <div className='contact-container'>
                    <Title
                      colorClassName=''
                      firstHalfTitle='Questions?'
                      secondHalfTitle='answers.'
                    />
                    <Row className='contacts'>
                      {sale_contacts.map((info) => {
                        return (
                          <Col
                            md={6}
                            key={info.id}
                            className='sale-member-container'
                          >
                            <article>
                              <Sale sale={info} />
                            </article>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </div>
              </SectionWrapper>

              <SectionWrapper class={'section'} idName={'disclaimer-page'}>
                <div className='bg-wrapper'>
                  <Row className='claimer-row'>
                    <Col md={8}>
                      <Title
                        colorClassName='white-title'
                        firstHalfTitle='Disclaimer.'
                        secondHalfTitle=''
                      />
                      <div className='claimer-content'>
                        <p className='claimer-text-block'>
                          All details provided in this brochure are indicative
                          only, for information purposes only and subject to
                          change without notice. No warranty or promise is made
                          by the sales brochure vendors or its representatives,
                          its related entities, consultants or their agents,
                          either expressly or impliedly. Purchasers and
                          interested parties must rely on their own enquiries
                          and obtain their own independent advice in relation to
                          the information and representation contained in this
                          brochure and its accuracy. Photographs and artist
                          impressions are for presentation purposes only and are
                          indicative only. They should not be relied upon as an
                          accurate representation of the final product.
                          Specification may change at any time. All interested
                          parties must refer to the contract of sale as to what
                          is included in the sale of the property.
                        </p>
                      </div>
                      <p className='copyright'>Copyright © 2021 </p>
                    </Col>
                    <Col md={4}>
                      <div className='logobox'>
                        <p>
                          Created by <br />
                          <img
                            className='whitefox-logo'
                            src='https://sundayhawksburn.com.au/wp-content/uploads/2021/03/logo-5.svg'
                            alt='whitefox-logo'
                          />
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </SectionWrapper>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Fullpage;
