import { useForm } from "react-hook-form"
import Button from "../Button"
import Input from "../Input"
import { ContainerCard, Title } from "./style"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object({
    email: yup.string().required('Digite seu e-mail').email('E-mail inválido'),
    password: yup.string().required('Digite sua senha').min(8, 'Mínimo 8 caracteres'),
})


const Card = () => {
    const { control, formState: { errors, isValid }} = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
        reValidateMode: "onChange"
    })

    return (
        <ContainerCard>
            <Title>Login</Title>
            <form>
                <Input 
                    backgroundText="E-mail" 
                    inputType="email" 
                    control={control} 
                    errorMsg={errors.email?.message} 
                />
                <Input 
                    backgroundText="Senha" 
                    inputType="password" 
                    control={control} 
                    errorMsg={errors.password?.message} />
                <Button 
                    title="Entrar" 
                    disabled={isValid}    
                />
            </form>
        </ContainerCard>
    )
}

export default Card
