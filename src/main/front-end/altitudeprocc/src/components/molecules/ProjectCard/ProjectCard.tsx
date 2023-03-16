import { Text } from "../../atoms/Text/Text";
import { StyledBottom, StyledBottomLeft, StyledBottomRight, StyledProjectCard, StyledProjectCardProps, StyledTop, StyledTopProps } from "./ProjectCard.styles";
import { ReactComponent as Actions } from "../../../assets/actions.svg";

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

const BottomRight = () => {
    return (
        <StyledBottomRight>
            <Actions/>
        </StyledBottomRight>
    )
}

const Bottom = ({id, name, data} : {id: string, name: string, data: string}) => {
    return (
        <StyledBottom>
            <BottomLeft id={id} name={name} data={data}/>
            <BottomRight/>
        </StyledBottom>
    )
}

export const ProjectCard = ({id, name, data, image, mb, mt, ml, mr}: ProjectCardProps) => {
    return (
        <StyledProjectCard mb={mb} mt={mt} ml={ml} mr={mr}>
            <Top image={image}/>
            <Bottom id={id} name={name} data={data}/>
        </StyledProjectCard>
    )
}