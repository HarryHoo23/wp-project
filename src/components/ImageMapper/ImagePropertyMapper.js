import ImageMapper from "react-image-mapper";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";

// eslint-disable-next-line
// const moveOnImage = (evt) => {
//     const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
//     console.log(coords);
// };

const ImagePropertyMapper = ({maps, width, destination, image, isSitePlan, type, isStorageTwo}) => {
    const [rerender, setRerender] = useState(false);
    const history = useHistory();

    const { setUnitMapIndex } = useGlobalContext();

    const clickHandler = (area, index, event) => {        
        setUnitMapIndex(index);
        history.push(`/${destination}`);
    };
    
    const clickSiteplanHandler = (area, index) => {
        if (type === "storage-complex" && isStorageTwo) {
            setUnitMapIndex(index + 24);                           
        } else {
            setUnitMapIndex(index);
        }
    }

    useEffect(() => {
        setRerender(!rerender);
        // eslint-disable-next-line
    }, [maps]);

    return (
        <ImageMapper
            src={image}
            map={maps}
            width={width}
            imgWidth={1980}
            strokeColor={"rgba(0, 0, 0, 0.1)"}
            onClick={isSitePlan ? clickHandler : clickSiteplanHandler}
            // onImageMouseMove={(event) => moveOnImage(event)}
        />
    );
};

export default ImagePropertyMapper;
