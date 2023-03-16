import { StyledModalMenu, StyledModalMenuItem, StyledModalMenuProps } from "./ModalMenu.styles"

interface ModalMenuItemProps {
    onClickRenderComponent: any;
}

export const ModalMenuItem = ({onClickRenderComponent, children}: React.PropsWithChildren<ModalMenuItemProps>) => {

    const printar = () => {
        console.log("Clicou!")
    }

    return (
        <StyledModalMenuItem onClick={printar}>
            {children}
        </StyledModalMenuItem>
    )
}

export const ModalMenu = ({children, visibility, id}: React.PropsWithChildren<StyledModalMenuProps>) => {
    return (
        <StyledModalMenu visibility={visibility} id={"Modal"+id}>
            {children}
        </StyledModalMenu>
    )
}