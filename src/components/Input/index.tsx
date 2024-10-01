import { Controller } from "react-hook-form";
import IInput from "../../interface/IInput";
import { InputStyled, TextError, Container } from "./style";

const Input = ({ backgroundText, inputType, control, errorMsg }: IInput) => {
    return (
        <Container>
            <Controller 
                control={control}
                name={inputType}
                rules={{ required: true }}
                render={({ field }) => {
                    return <InputStyled 
                        {...field} 
                        placeholder={backgroundText} 
                        type={inputType}
                        erro={errorMsg ? "true" : "false"}
                    />
                }
            }
            />
            {errorMsg ? <TextError>{errorMsg}</TextError> : null}
        </Container>
    )
}

export default Input;