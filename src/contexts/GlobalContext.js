import React, { useState, useContext } from "react";
import {
    modalData,
    building_construction_details as building_data,
    tabContent
} from "../data/Content";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showed, setShowed] = useState(false);
    const [isModalShow, setIsModalShow] = useState({
        showModal: false,
        case: 1,
    });
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState({ show: false, msg: "" });
    const [individualModalContent, setIndividualModalContent] = useState(
        modalData[0]
    );
    const [singleFixtureModalContent, setSingleFixtureModalContent] = useState(
        building_data[0]
    );
    const [unitMapIndex, setUnitMapIndex] = useState(0);
    const [unitData, setUnitData] = useState(tabContent[0])
    const [mapIndex, setMapIndex] = useState(0);

    const openAndCloseNavbar = () => {
        setIsOpen(!isOpen);
    };

    function handleLogoModalClickOpen(index) {
        setIsModalShow({
            showModal: true,
            case: 1,
        });
        setIndividualModalContent(modalData[index]);
        window.fullpage_api.setAllowScrolling(false);
    }

    const handleFormModalClickOpen = (isFullPage) => {
        setIsModalShow({
            showModal: true,
            case: 2,
        });
        if (isFullPage) {
            window.fullpage_api.setAllowScrolling(false);
        }
    };

    function handleFixtureModalClickOpen(index) {
        setIsModalShow({
            showModal: true,
            case: 3,
        });
        setSingleFixtureModalContent(building_data[index]);     
    }

    const handleModalClickClose = (isTrue) => {
        setIsModalShow({
            showModal: false,
            case: 0,
        });
        if (isTrue) {
            window.fullpage_api.setAllowScrolling(true);            
        } else {
            return
        }
    };

    const onClickScrollDown = () => {
        window.fullpage_api.moveSectionDown();
    };

    const onClickScrollUp = () => {
        window.fullpage_api.moveSectionUp();
    };

    const handleButtonClick = (index) => {        
        setMapIndex(index);
        setUnitData(tabContent[index]);
        window.fullpage_api.moveSectionDown();
    }

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
                isOpen,
                setIsOpen,
                setIndividualModalContent,
                openAndCloseNavbar,
                error,
                onClickScrollDown,
                onClickScrollUp,
                isModalShow,
                handleLogoModalClickOpen,
                handleFormModalClickOpen,
                handleModalClickClose,
                individualModalContent,
                setIsModalShow,
                singleFixtureModalContent,
                handleFixtureModalClickOpen,
                unitMapIndex,
                showed,
                setShowed,
                setUnitMapIndex,
                setError,
                unitData,
                setUnitData,
                handleButtonClick,
                mapIndex,
                setMapIndex
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
