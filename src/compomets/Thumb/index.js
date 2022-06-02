import react from "react";
//style
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        <Image src={image} alt="thumb" />
    </div>

)
export default Thumb;
