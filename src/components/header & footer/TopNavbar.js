import React from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../contexts/GlobalContext";
import Logo from "../../assests/logo/Viridian_Logo-coloured.svg";
import message from '../../assests/img/bubble-1.svg';

const TopNavbar = (props) => {
    const { handleFormModalClickOpen, onClickScrollUp, openAndCloseNavbar } = useGlobalContext();
    let history = useHistory();

    const clickToGoBack = () => {
        history.goBack();
    };

    return (
        <div className={`nav-wrapper-top ${props.className}`}>
            <div className={`nav-top-row ${props.addtionalClass} `}>
                <div className="btn-left-box scroll-up">
                    <span id="scroll-up" className={props.addtionalClass}>
                        {props.showLogo && <img src={Logo} alt="logo" />}
                    </span>
                    <div
                        id="menu-arrow-down-box"
                        className={props.addtionalClass}
                        role="button"
                        onClick={props.goBack ? clickToGoBack : onClickScrollUp}
                    >
                        <svg
                            id="menu-arrow-down"
                            xmlns="http://www.w3.org/2000/svg"
                            width="23.917"
                            height="13.438"
                            viewBox="0 0 23.917 13.438"
                        >
                            <g
                                id="Arrow"
                                transform="translate(-708.002 -808.173)"
                            >
                                <path
                                    id="Fill_62"
                                    data-name="Fill 62"
                                    d="M731.92,809.209a1.056,1.056,0,0,0-.3-.733.976.976,0,0,0-1.415,0l-10.25,10.631-10.25-10.631a.976.976,0,0,0-1.415,0,1.065,1.065,0,0,0,0,1.466l10.96,11.365a.97.97,0,0,0,1.41,0l10.96-11.365a1.057,1.057,0,0,0,.3-.733"
                                    fill="#fff"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className={`property-contact-btn btn btn-secondary mr-3 ${props.addtionalClass}`}
                            onClick={handleFormModalClickOpen}
                        >
                            <img src={message} alt="message" />
                        </button>
                        <span id='nav-open-btn' role='button' onClick={openAndCloseNavbar}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24.85'
                                height='19.021'
                                viewBox='0 0 24.85 19.021'
                            >
                                <g
                                id='Layer_47'
                                data-name='Layer 47'
                                transform='translate(-10.5 -17.84)'
                                >
                                <path
                                    id='Path_221'
                                    data-name='Path 221'
                                    d='M11.507,19.855H34.343a1.007,1.007,0,0,0,0-2.015H11.507a1.007,1.007,0,1,0,0,2.015Z'
                                    fill='#969696'
                                />
                                <path
                                    id='Path_222'
                                    data-name='Path 222'
                                    d='M35.35,31.507A1.008,1.008,0,0,0,34.343,30.5H11.507a1.007,1.007,0,1,0,0,2.015H34.343A1.008,1.008,0,0,0,35.35,31.507Z'
                                    transform='translate(0 -4.157)'
                                    fill='#969696'
                                />
                                <path
                                    id='Path_223'
                                    data-name='Path 223'
                                    d='M20.91,43.16h-9.4a1.007,1.007,0,1,0,0,2.015h9.4a1.007,1.007,0,0,0,0-2.015Z'
                                    transform='translate(0 -8.314)'
                                    fill='#969696'
                                />
                                </g>
                            </svg>
                        </span>                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;
