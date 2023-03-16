import { useState } from "react";
import ReactDOM from 'react-dom';
import { StyledComponentToBeRendered, StyledModalMenu, StyledModalMenuItem, StyledModalMenuProps } from "./ModalMenu.styles"

interface ModalMenuItemProps {
    componentToBeRendered: any;
}

export const ModalMenuItem = ({ componentToBeRendered, children }: React.PropsWithChildren<ModalMenuItemProps>) => {

    const [componentVisibility, setComponentVisibility] = useState<boolean>(false);

    return (
        <>
            <StyledModalMenuItem onClick={() => { setComponentVisibility(true) }}>
                {children}
            </StyledModalMenuItem>

            {componentVisibility && ReactDOM.createPortal(
                <StyledComponentToBeRendered>
                    {componentToBeRendered}
                </StyledComponentToBeRendered>,
                document.getElementById("root") as HTMLElement
            )}
        </>
    )

}

export const ModalMenu = ({ children, visibility, id }: React.PropsWithChildren<StyledModalMenuProps>) => {
    return (
        <StyledModalMenu visibility={visibility} id={"Modal" + id}>
            {children}
        </StyledModalMenu>
    )
}
