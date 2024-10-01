import IButton from "../../interface/IButton";
import { ButtonStyled } from "./style";

const Button = ({ title, disabled }: IButton) => {
    return (
        <ButtonStyled disabled={!disabled}>{title}</ButtonStyled>
    )
}

export default Button;