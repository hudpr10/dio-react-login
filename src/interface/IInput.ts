import { Control } from "react-hook-form";

interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    backgroundText: string,
    inputType: string,
    errorMsg?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any, any>,
}

export default IInput;