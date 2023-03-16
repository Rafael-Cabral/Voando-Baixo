import { Text } from "../../atoms/Text/Text";
import { StyledBottom, StyledBottomLeft, StyledBottomRight, StyledProjectCard, StyledProjectCardProps, StyledTop, StyledTopProps } from "./ProjectCard.styles";
import { ReactComponent as OpenModalMenu } from "../../../assets/actions.svg";
import { ModalMenu, ModalMenuItem } from "../../atoms/ModalMenu/ModalMenu";
import { Home } from "../../../pages/Home/Home";
import { useEffect, useState } from "react";

export interface ProjectCardProps extends StyledProjectCardProps {
    id: string;
    name: string;
    data: string;
    image?: string;
}

const Top = ({image} : StyledTopProps) => {
    return (
        <StyledTop image={image}/>
    )
}

const BottomLeft = ({id, name, data} : {id: string, name: string, data: string}) => {
    return (
        <StyledBottomLeft>
            <Text size="small" weight="semi">{name}</Text>
            <Text size="small" weight="medium" color="#52525B">{data}</Text>
        </StyledBottomLeft>
    )
}

const BottomRight = ({handleModalVisibility} : {handleModalVisibility: any}) => {
    return (
        <StyledBottomRight onClick={handleModalVisibility}>
            <OpenModalMenu />
        </StyledBottomRight>
    )
}

const Bottom = ({id, name, data, handleModalVisibility} : {id: string, name: string, data: string, handleModalVisibility: any}) => {
    return (
        <StyledBottom>
            <BottomLeft id={id} name={name} data={data}/>
            <BottomRight handleModalVisibility={handleModalVisibility}/>
        </StyledBottom>
    )
}

export const ProjectCard = ({id, name, data, image, mb, mt, ml, mr}: ProjectCardProps) => {

    const [modalMenuVisibility, setModalMenuVisibility] = useState<boolean>(false);

    useEffect(() => {

        const handleMouseClick = (event: MouseEvent) => {
            setModalMenuVisibility(false);
        };

        window.addEventListener('mousedown', handleMouseClick);

        return () => {
          window.removeEventListener('mousedown', handleMouseClick);
        };
        
      }, []);
    
    const handleModalVisibility = () => {
        
        setModalMenuVisibility(!modalMenuVisibility);

    }
    
    return (
        <StyledProjectCard mb={mb} mt={mt} ml={ml} mr={mr}>

            <Top image={image}/>

            <Bottom id={id} name={name} data={data} handleModalVisibility={handleModalVisibility}/>

            <ModalMenu visibility={modalMenuVisibility ? "visible" : "hidden"} id={id}>
                <ModalMenuItem onClickRenderComponent={<Home />}>
                    <Text size="medium" weight="regular" color="#000">Renomear</Text>
                </ModalMenuItem>
                <ModalMenuItem onClickRenderComponent={<Home />}>
                    <Text size="medium" weight="regular" color="#000">Excluir</Text>
                </ModalMenuItem>
            </ModalMenu>

        </StyledProjectCard>
    )
}