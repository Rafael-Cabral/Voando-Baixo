import { InputProps, StyledInput } from "./Input.styles"

export const Input = ({placeholder, icon} : InputProps) => {
    return (
        <StyledInput>
            {icon && icon}
            <input type="text" placeholder={placeholder}/>
        </StyledInput>
    )
}