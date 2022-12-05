import React, { useState, useContext } from "react";
import { useEffect } from "react";
import {
    modalData,
    building_construction_details as building_data,
    tabContent
} from "../data/Content";
import axios from "./axiosDB";
import {
    walkupImageList,
    showroomImageList,
    threeLevelImageList,
    threeLevelOfficeImageList,
    warehouseImageList,
    hybridImageList,
    strataImageList,
} from "../data/ImageList";

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
    const [individualModalContent, setIndividualModalContent] = useState(modalData[0]);
    const [singleFixtureModalContent, setSingleFixtureModalContent] = useState(building_data[0]);
    const [unitMapIndex, setUnitMapIndex] = useState(0);
    const [unitData, setUnitData] = useState(tabContent[0]);
    const [mapIndex, setMapIndex] = useState(0);
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios
            .get("data/data.json")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

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
            return;
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
    };

    const addImageToUnits = (array, unitType) => {
        if (data && Array.isArray(array) && array.length > 0) {            
            let resultArray = [],
                imageUrl = "",
                sitePlanImageUrl = "",
                pdfUrl = "";
            if (unitType === "showroom") {
                imageUrl =
                    "https://viridian-highett.com.au/images/floor-plans/Main-Building/showroom-floorplan.png";
                sitePlanImageUrl =
                    "https://viridian-highett.com.au/images/internal-site-plans/internal-showroom.png";
                pdfUrl = "https://viridian-highett.com.au/pdf/Main-building/showroom.pdf";
                resultArray = array.map((element) => {
                    return { ...element, img: imageUrl, sitePlanImg: sitePlanImageUrl, pdf: pdfUrl };
                });
            }
            if (unitType === "strata") {
                imageUrl = "https://viridian-highett.com.au/images/floor-plans/Main-Building";
                sitePlanImageUrl = "https://viridian-highett.com.au/images/site-plans/MAIN-BUILDING/";
                pdfUrl = "https://viridian-highett.com.au/pdf/Main-building/";
                resultArray = array.map((element, index) => {
                    return {
                        ...element,
                        img: `${imageUrl}/office-${index + 1}-floorplan.png`,
                        sitePlanImg: `${sitePlanImageUrl}office${index + 1}-siteplan.png`,
                        pdf: `${pdfUrl}WHITEFOX_Marketing_CVA_Viridian_Floorplan_OFFICE_${
                            index + 1
                        }.pdf`,
                    };
                });
            }
            if (unitType === "office") {
                imageUrl = "https://viridian-highett.com.au/images/floor-plans/C";
                sitePlanImageUrl = "https://viridian-highett.com.au/images/internal-site-plans/C";
                pdfUrl = "https://viridian-highett.com.au/pdf/C/";
                resultArray = array.map((element, index) => {
                    return {
                        ...element,
                        img: `${imageUrl}/c${index + 1}-floorplan.png`,
                        sitePlanImg: `${sitePlanImageUrl}/c${index + 1}-internal-siteplan.png`,
                        pdf: `${pdfUrl}WHITEFOX_Marketing_CVA_Viridian_Floorplan_OFFICE_${
                            index + 1
                        }.pdf`,
                    };
                });
            }
            if (unitType === "hybrid") {
                imageUrl = "https://viridian-highett.com.au/images/floor-plans/";
                sitePlanImageUrl = "https://viridian-highett.com.au/images/internal-site-plans/";
                pdfUrl = "https://viridian-highett.com.au/pdf/";
                let tempArray_A = array.slice(0, 12).map((element, index) => {
                    return {
                        ...element,
                        img: `${imageUrl}/A/a${index + 1}-floorplan.png`,
                        sitePlanImg: `${sitePlanImageUrl}/A/a${index + 1}-internal-siteplan.png`,
                        pdf: `${pdfUrl}A/WHITEFOX_Marketing_CVA_Viridian_Floorplan_A${index + 1}.pdf`,
                    };
                });
                let tempArray_D = array.slice(12, 15).map((element, index) => {
                    return {
                        ...element,
                        img: `${imageUrl}/D/d${index + 1}-floorplan.png`,
                        sitePlanImg: `${sitePlanImageUrl}/D/d${index + 1}-internal-siteplan.png`,
                        pdf: `${pdfUrl}D/WHITEFOX_Marketing_CVA_Viridian_Floorplan_D${index + 1}.pdf`,
                    };
                });
                resultArray = tempArray_A.concat(tempArray_D);
            }
            if (unitType === "three") {
                imageUrl = "https://viridian-highett.com.au/images/floor-plans/B";
                pdfUrl = "https://viridian-highett.com.au/pdf/B/";
                sitePlanImageUrl = "https://viridian-highett.com.au/images/internal-site-plans/B";
                resultArray = array.map((element, index) => {
                    return {
                        ...element,
                        img: `${imageUrl}/b${index + 1}-floorplan.png`,
                        sitePlanImg: `${sitePlanImageUrl}/b${index + 1}-internal-siteplan.png`,
                        pdf: `${pdfUrl}WHITEFOX_Marketing_CVA_Viridian_Floorplan_B${index + 1}.pdf`,
                    };
                });
            }
            if (unitType === "storage") {
                imageUrl = "https://viridian-highett.com.au/images/floor-plans/E";
                sitePlanImageUrl = "https://viridian-highett.com.au/images/internal-site-plans/E";
                pdfUrl = "https://viridian-highett.com.au/pdf/E/";
                resultArray = array.map((element, index) => {
                    return {
                        ...element,
                        img: `${imageUrl}/e${index + 1}-floorplan.png`,
                        sitePlanImg: `${sitePlanImageUrl}/e${index + 1}-internal-siteplan.png`,
                        pdf: `${pdfUrl}WHITEFOX_Marketing_CVA_Viridian_Floorplan_E${index + 1}.pdf`,
                    };
                });
            }
            if (unitType === "complex") {
                imageUrl = "https://viridian-highett.com.au/images/floor-plans/Storage-Units";
                sitePlanImageUrl =
                    "https://viridian-highett.com.au/images/site-plans/STORAGE-UNITS/storage-siteplan.png";
                pdfUrl = "https://viridian-highett.com.au/pdf/Storage_Units/";
                resultArray = array.map((element, index) => {
                    return {
                        ...element,
                        img: `${imageUrl}/${index + 1}-storage-floorplan.png`,
                        sitePlanImg: `${sitePlanImageUrl}`,
                        pdf: `${pdfUrl}WHITEFOX_Marketing_CVA_Viridian_Floorplan_STORAGE_UNIT_${
                            index + 1
                        }.pdf`,
                    };
                });
            }
            return resultArray;
        }        
    };

    const {
        showroom,
        state_office,
        walk_up_office,
        two_level_office,
        triple_level_office,
        working_plus_storage,
        storage_complex,
    } = data;

    
    let arrayShow = [showroom]
    
    const sitePlanData = [
        {
            type: "showroom",
            first_half_title: "Showroom",
            second_half_title: "",
            data: addImageToUnits(arrayShow, "showroom"),
            list: showroomImageList,
        },
        {
            type: "strata-office-suites",
            first_half_title: "Strata office",
            second_half_title: "suites",
            data: addImageToUnits(state_office, "strata"),
            list: strataImageList,
        },
        {
            type: "walk-up-office",
            first_half_title: "Walk-up",
            second_half_title: "office",
            data: addImageToUnits(walk_up_office, "office"),
            list: walkupImageList,
        },
        {
            type: "two-level-hybrid",
            first_half_title: "Two level",
            second_half_title: "hybrid",
            data: addImageToUnits(two_level_office, "hybrid"),
            list: hybridImageList,
        },
        {
            type: "three-level-hybrid",
            first_half_title: "Three-level",
            second_half_title: "hybrid",
            data: addImageToUnits(triple_level_office, "three"),
            list: threeLevelImageList,
        },
        {
            type: "working-storage",
            first_half_title: "Two-level",
            second_half_title: "office warehouses",
            data: addImageToUnits(working_plus_storage, "storage"),
            list: threeLevelOfficeImageList,
        },
        {
            type: "storage-complex",
            first_half_title: "Micro",
            second_half_title: "warehouse",
            data: addImageToUnits(storage_complex, "complex"),
            list: warehouseImageList,
        },
    ];

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
                isOpen,
                sitePlanData,
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
                setMapIndex,
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
