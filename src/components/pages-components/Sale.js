import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

const Sale = (props) => {

    const { sale } = props;
    const { handleFormModalClickOpen } = useGlobalContext();

    return (
        <>
            <div className="sale-img-box">
                <img src={sale.img} className="sale-img" alt={sale.name} />
                <div className="contact-btn-container">
                    <button className="email btn btn-outline-secondary" onClick={props.message ? () => props.message(false) :handleFormModalClickOpen}>
                        Message
                    </button>                    
                </div>
            </div>
            <div className="sale-info">
                <h5 className="sale-name">{sale.name}</h5>
                <p className="sale-job-title">{sale.title}</p>                
                <ul className="sale-contact">
                    <li><a href={`tel: ${sale.phone}`}>{sale.phone}</a></li>
                    <li><a href={`mailto: ${sale.email}`}>{sale.email}</a></li>
                    <li>
                        <a href={`tel: ${sale.tel}`}>{sale.tel}</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sale;
