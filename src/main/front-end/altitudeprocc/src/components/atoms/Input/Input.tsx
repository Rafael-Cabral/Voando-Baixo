import { InputProps, StyledInput } from "./Input.styles"

export const Input = ({placeholder, icon, type} : InputProps) => {
    return (
        <StyledInput>
            {icon && icon}
            <input type={type} placeholder={placeholder}/>
        </StyledInput>
    )
}