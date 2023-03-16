import { ReactElement, useState } from "react";
import ReactDOM from 'react-dom';
import { StyledComponentToBeRendered, StyledModalMenu, StyledModalMenuItem, StyledModalMenuProps } from "./ModalMenu.styles"

interface ModalMenuItemProps {
    componentToBeRendered: ReactElement;
    componentVisibility: boolean;
    setComponentVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalMenuItem = ({ componentToBeRendered, children, componentVisibility, setComponentVisibility }: React.PropsWithChildren<ModalMenuItemProps>) => {

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
