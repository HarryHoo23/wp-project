import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import SectionWrapper from "./SectionWrapper";
import { Row, Col } from "react-bootstrap";
import { hrefLinks } from "../data/Menu";
import { fixtures_type, sale_contacts } from "../data/Content";
import {
    doorStep_One_Right,
    doorStep_Two_Left_eat,
    doorStep_Three_Right_drink,
    doorStep_Four_Left_leisure,
    doorStep_Five_Right_play,
} from "../data/Neighbourhood";
import { useGlobalContext } from "../contexts/GlobalContext";
import Navbar from "./header & footer/Navbar";
import TopNavbar from "./header & footer/TopNavbar";
import Title from "./pages-components/Title";
import { svgImagePath } from "../data/ImageList";
import ImageGallary from "./ImageGallary";
import HomeVideo from '../video/Viridian-home.mp4';
import ReactPlayer from 'react-player';
import LogoContainer from "./pages-components/LogoContainer";
import LogoModalContent from "./pages-components/LogoModalContent";
import GeneralModal from "./pages-components/GeneralModal";
import ContactForm from "./pages-components/ContactForm/ContactForm";
import FixtureList from "./pages-components/FixtureList";
import DoorStepAccordion from "./pages-components/DoorStepAccordion";
import Sale from "./pages-components/Sale";
import CommercialUnits from "./pages-components/CommercialUnits";
import Units from "./pages-components/Units";
import Financial from "./pages-components/Financial";
import Map from "./pages-components/Map";
import logo from "../assests/logo/Viridian_Logo-white.svg";
import arrow from "../assests/img/download-2.png";
import fullScreen from "../assests/img/icons/lightbox-expand.svg";

const animationValue = sessionStorage.getItem('hasShowed');

const Fullpage = () => {
    const {
        isLoading,
        individualModalContent,
        handleLogoModalClickOpen,
        isModalShow,
        singleFixtureModalContent,
        handleFixtureModalClickOpen,        
    } = useGlobalContext();
    
    const [showLoadingClass, setShowLoadingClass] = useState("");
    const [showImgClass, setShowImgClass] = useState("");
    const [hasShownAnimation, setHasShownAnimation] = useState(animationValue);
    const [modalClassName, setModalClassName] = useState("");
    
    const [name, setName] = useState([
        { id: 1, className: "" },
        { id: 2, className: "" },
        { id: 3, className: "" },
        { id: 4, className: "" },
        { id: 5, className: "" },
        { id: 6, className: "" },
        { id: 7, className: "" },
        { id: 8, className: "" },
        { id: 9, className: "" },
        { id: 10, className: "" },
        { id: 11, className: "" },
        { id: 12, className: "" },
        { id: 13, className: "" },
        { id: 14, className: "" },
        { id: 15, className: "" },        
    ]);

    const [navBarTitle, setNavBarTitle] = useState({
        bgColorClass: "",
        title: "",
        topTitle: "",
    });

    function changeArrow() {
        let image_gallery_icons =
            document.getElementsByClassName("image-gallery-icon");
        for (let i = 0; i < image_gallery_icons.length; i++) {
            image_gallery_icons[
                i
            ].innerHTML = `<img src=${arrow} alt="arrow" />`;
        }

        let fullscreenButtons = document.getElementsByClassName(
            "image-gallery-fullscreen-button"
        );
        for (let i = 0; i < fullscreenButtons.length; i++) {
            fullscreenButtons[
                i
            ].innerHTML = `<img src=${fullScreen} alt="fullScreen" />`;
        }
    }

    function renderModalContent() {
        if (isModalShow.case === 1) {
            setModalClassName("small-modal");
            return <LogoModalContent {...individualModalContent} />;
        } else if (isModalShow.case === 2) {
            setModalClassName("enquiry-modal");
            return <ContactForm />;
        } else if (isModalShow.case === 3) {
            setModalClassName("");
            return <FixtureList {...singleFixtureModalContent} />;
        } else {
            return null;
        }
    }

    useEffect(() => {
        changeArrow();
        setShowLoadingClass("show");
        const first_timeout = setTimeout(() => {
            setShowImgClass("fadeIn");
        }, 2000);
        const second_timeout = setTimeout(() => {
            setShowLoadingClass("");
            setShowImgClass("fadeOut");
        }, 5000);

        return () => clearTimeout(first_timeout, second_timeout);
    }, []);

    useEffect(() => {
        sessionStorage.setItem('hasShowed', true);
        setHasShownAnimation(animationValue);
    }, []);

    return (
        <>
            {(isLoading && !hasShownAnimation) && (
                <div id="preloader" className={`${showLoadingClass}`}>
                    <img
                        src={logo}
                        alt="Sunday"
                        className={`${showImgClass}`}
                    />
                </div>
            )}
            <ReactFullpage
                //fullpage options
                scrollingSpeed={800} /* Options here */
                // sectionsColor={['orange', 'purple', 'green']}
                licenseKey={"zMccI0J!a3"}
                navigation={false}
                anchors={[                    
                    "units",
                    "commercial-units",
                    "intro",
                    "every",
                    "partners",
                    "fixtures",
                    "financial",
                    "doorsteps",
                    "doorsteps-eat",
                    "doorsteps-drink",
                    "doorsteps-leisure",
                    "doorsteps-play",
                    "maps",
                    "contact-us",
                    "disclaimer",
                ]}
                autoScrolling={true}
                scrollBar={true}
                normalScrollElements=".fixture-list, .contact-form-container, .sale-intro"
                // normalScrollElements: '.vs-img, .sale-intro, #map',
                touchSensitivity={15}
                fitToSection={true}
                afterLoad={() => {
                    for (let i = 0; i < hrefLinks.length; i++) {
                        if (document.body.classList[0] === hrefLinks[i].link) {
                            let newArr = [...name];
                            newArr[i].className = "show";
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
                            <GeneralModal renderBodyComponent={renderModalContent()} className={modalClassName} />
                            <Navbar
                                title={navBarTitle.title}
                                additionClass={navBarTitle.bgColorClass}
                            />
                            <TopNavbar
                                heading={navBarTitle.topTitle}
                                addtionalClass={navBarTitle.bgColorClass}
                            />                            

                            <SectionWrapper
                                class={"section"}
                                idName={"units_all"}
                            >
                                <div className="bg-wrapper">
                                    <Units />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"comm_units"}
                            >
                                <div className="bg-wrapper">
                                    <CommercialUnits />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"home-modal"}
                            >
                                <div                                    
                                    className={`${name[2].className} h-100`}
                                >
                                    <ImageGallary />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"sunday-everyday"}
                            >
                                <Row className="sd-everyday-row">
                                    <Col
                                        lg={4}
                                        md={5}
                                        className="sunday-paragraph"
                                    >
                                        <Title
                                            colorClassName=""
                                            firstHalfTitle="About"
                                            secondHalfTitle="development"
                                        />
                                        <p style={{ paddingTop: "30px", marginBottom: "30px"}}>
                                            A brilliantly designed and cleverly low-maintenance
                                            development is coming to the Bayside. Not only is there an array of units being offered, there’s also versatility embedded within — the interiors have been meticulously designed with high-end materials in mind, focusing on creating offices and warehouses that go against the industrial grain.
                                            <br />
                                            The development can be categorised by two halves — offices and warehouse suites above ground that include premium fixtures and versatile floorplans, and a secure complex below ground that offers versatile micro-warehousing and storage options for business or personal use. Customise your investment by versatility embedded materials combining an office suite with a micro-warehouse space to keep the workplace clutter to a minimum.
                                        </p>
                                    </Col>
                                    <Col
                                        lg={8}
                                        md={7}
                                        className="sunday-everyday-carousel-box"
                                    >
                                        <ReactPlayer controls={true} url={HomeVideo} width='calc(100% - 5rem)' height="100%" />
                                    </Col>
                                </Row>
                            </SectionWrapper>

                            <SectionWrapper class={"section"} idName={"sunday-partners"} >
                                <div className="bg-wrapper">
                                    <Title
                                        colorClassName="white-title"
                                        firstHalfTitle="Partners"
                                        secondHalfTitle=""
                                    />
                                    <Row className="logo-row">
                                        {svgImagePath.map((svgImage, index) => {
                                            return (
                                                <Col
                                                    key={index}
                                                    md={3}
                                                    role="button"
                                                    onClick={() => handleLogoModalClickOpen(index)}
                                                >
                                                    <LogoContainer
                                                        bgImg={svgImage}
                                                        alt="logo-img"
                                                    />
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"fixtures-finishes"}
                            >
                                <div className="bg-wrapper">
                                    <Title
                                        colorClassName="white-title"
                                        firstHalfTitle="Fixtures"
                                        secondHalfTitle="& finishes"
                                    />
                                    <Row>
                                        {fixtures_type.map((fixture, index) => {
                                            return (
                                                <Col
                                                    key={fixture.id}
                                                    lg={3}
                                                    md={4}
                                                    sm={6}
                                                    onClick={() => handleFixtureModalClickOpen(index)}
                                                >
                                                    <div className="fixture-box">
                                                        <div className="fixture-type">
                                                            <p>
                                                                {fixture.type}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"wf-financial"}
                            >
                                <div className="bg-wrapper">
                                    <Financial />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"doorstep-1"}
                            >
                                <div className={`doorstep-container ${name[6].className}`} >
                                    <DoorStepAccordion
                                        direction="right"
                                        second_direction="left"
                                        data={doorStep_One_Right}
                                        title="NEIGHBOURHOOD"
                                    />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"doorstep-2"}
                            >
                                <div className={`doorstep-container ${name[7].className}`}>
                                    <DoorStepAccordion
                                        direction="left"
                                        second_direction="right"
                                        data={doorStep_Two_Left_eat}
                                        title="EAT"
                                    />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"doorstep-3"}
                            >
                                <div className={`doorstep-container ${name[8].className}`}>
                                    <DoorStepAccordion
                                        direction="right"
                                        second_direction="left"
                                        data={doorStep_Three_Right_drink}
                                        title="DRINK"
                                    />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"doorstep-4"}
                            >
                                <div className={`doorstep-container ${name[9].className}`} >
                                    <DoorStepAccordion
                                        direction="left"
                                        second_direction="right"
                                        data={doorStep_Four_Left_leisure}
                                        title="LEISURE"
                                    />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"doorstep-5"}
                            >
                                <div className={`doorstep-container ${name[10].className}`} >
                                    <DoorStepAccordion
                                        direction="right"
                                        second_direction="left"
                                        data={doorStep_Five_Right_play}
                                        title="PLAY"
                                    />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper class={"section"} idName={"wf-map"}>
                                <div className="bg-wrapper">
                                    <Map />
                                </div>
                            </SectionWrapper>

                            <SectionWrapper
                                class={"section"}
                                idName={"wf-contact-us"} >
                                <div className="bg-wrapper">
                                    <div className="contact-container">
                                        <Title
                                            colorClassName=""
                                            firstHalfTitle="Questions?"
                                            secondHalfTitle="answers"
                                        />
                                        <Row className="contacts">
                                            {sale_contacts.map((info) => {
                                                return (
                                                    <Col
                                                        md={6}
                                                        key={info.id}
                                                        className="sale-member-container"
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

                            <SectionWrapper
                                class={"section"}
                                idName={"disclaimer-page"}
                            >
                                <div className="bg-wrapper">
                                    <Row className="claimer-row">
                                        <Col md={8}>
                                            <Title
                                                colorClassName="white-title"
                                                firstHalfTitle="Disclaimer"
                                                secondHalfTitle=""
                                            />
                                            <div className="claimer-content">
                                                <p className="claimer-text-block">
                                                    All details provided in this
                                                    brochure are indicative
                                                    only, for information
                                                    purposes only and subject to
                                                    change without notice. No
                                                    warranty or promise is made
                                                    by the sales brochure
                                                    vendors or its
                                                    representatives, its related
                                                    entities, consultants or
                                                    their agents, either
                                                    expressly or impliedly.
                                                    Purchasers and interested
                                                    parties must rely on their
                                                    own enquiries and obtain
                                                    their own independent advice
                                                    in relation to the
                                                    information and
                                                    representation contained in
                                                    this brochure and its
                                                    accuracy. Photographs and
                                                    artist impressions are for
                                                    presentation purposes only
                                                    and are indicative only.
                                                    They should not be relied
                                                    upon as an accurate
                                                    representation of the final
                                                    product. Specification may
                                                    change at any time. All
                                                    interested parties must
                                                    refer to the contract of
                                                    sale as to what is included
                                                    in the sale of the property.
                                                </p>
                                            </div>
                                            <p className="copyright">
                                                Copyright © {new Date().getFullYear()}
                                            </p>
                                        </Col>
                                        <Col md={4}>
                                            <div className="logobox">
                                                <p>
                                                    Created by <br />
                                                    <img
                                                        className="whitefox-logo"
                                                        src="https://sundayhawksburn.com.au/wp-content/uploads/2021/03/logo-5.svg"
                                                        alt="whitefox-logo"
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
