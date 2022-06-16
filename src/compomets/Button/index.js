import react from "react";
import { Wrapper, wrapper } from "./Button.styles";

const Button = ({ text, callback }) => {
    return <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>;
};
export default Button;
