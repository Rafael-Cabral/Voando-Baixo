import { StyledInput, StyledInputProps } from "./Input.styles"

interface InputProps extends StyledInputProps {
    icon: any;
    type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    placeholder: string;
    
}

export const Input = ({placeholder, icon, mb, mt, ml, mr, type} : React.PropsWithChildren<InputProps>) => {
    return (
        <StyledInput mb={mb} mt={mt} ml={ml} mr={mr}>
            {icon && icon}
            <input type={type} placeholder={placeholder}/>
        </StyledInput>
    )
}