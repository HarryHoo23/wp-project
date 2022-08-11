import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

const Sale = ({ sale }) => {

    const { handleFormModalClickOpen } = useGlobalContext();

    return (
        <>
            <div className="sale-img-box">
                <img src={sale.img} className="sale-img" alt={sale.name} />
                <div className="contact-btn-container">
                    <button className="email btn btn-outline-secondary" onClick={handleFormModalClickOpen}>
                        Message
                    </button>                    
                </div>
            </div>
            <div className="sale-info">
                <h5 className="sale-name">{sale.name}</h5>
                <p className="sale-job-title">{sale.title}</p>

                <div className="sale-intro">
                    <p dangerouslySetInnerHTML={{__html: sale.sale_intro}} />
                </div>
                <ul className="sale-contact">
                    <li>{sale.phone}</li>
                    <li>{sale.email}</li>
                    <li>
                        {sale.tel}
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sale;
