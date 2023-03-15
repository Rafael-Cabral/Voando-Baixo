import { Text } from "../../atoms/Text/Text";
import { StyledBottom, StyledProjectCard, StyledProjectCardProps, StyledTop, StyledTopProps } from "./ProjectCard.styles";

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

const Bottom = ({id, name, data} : {id: string, name: string, data: string}) => {
    return (
        <StyledBottom>
            <Text size="small" weight="semi">{name}</Text>
            <Text size="small" weight="medium" color="#52525B">{data}</Text>
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