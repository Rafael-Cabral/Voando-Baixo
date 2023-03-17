import { Tag } from "../../components/atoms/Tag/Tag"
import { StyledControls, StyledCoordinateLabel, StyledMapZone, StyledPageDescription, StyledProject, StyledProjectContent, StyledProjectSidebar } from "./Project.style"
import { ReactComponent as Back } from "../../assets/back.svg";
import { Link } from "react-router-dom";
import { Text } from "../../components/atoms/Text/Text";
import { ReactComponent as A } from "../../assets/a.svg";
import { ReactComponent as B } from "../../assets/b.svg";
import { Input } from "../../components/atoms/Input/Input";
import { ReactComponent as Exit } from "../../assets/exit.svg";
import { Button } from "../../components/atoms/Button/Button";
import { Slider } from "../../components/atoms/Slider/Slider";

const CoordinateLabel = ({text, icon} : { text : string, icon : any}) => {
    return (
        <StyledCoordinateLabel>
            <Text size="small" weight="medium" mr="0.6rem" color="#667085">{ text }</Text>
            { icon && icon }
        </StyledCoordinateLabel>
    )
}

const PageDescription = () => {
    return (
        <StyledPageDescription>
            <Text size="small" weight="medium" color="#667085">Você está em</Text>
            <Text size="large" weight="semi" color="#18181B">Operação 1</Text>
        </StyledPageDescription>
    )
}

const ProjectSidebar = () => {
    return (
        <StyledProjectSidebar>
            <Link to="/projects">
                <Tag icon={<Back />} iconPosition="left" mb="3.6rem">Voltar</Tag>
            </Link>
            <PageDescription />
            <CoordinateLabel text="Origem" icon={<A />} />
            <Input type="number" placeholder="Latitude de origem" icon={<Exit />} value="" mb="1.2rem"></Input>
            <Input type="number" placeholder="Longitude de origem" icon={<Exit />} value="" mb="2.4rem"></Input>
            <CoordinateLabel text="Destino" icon={<B />} />
            <Input type="number" placeholder="Latitude de destino" icon={<Exit />} value="" mb="1.2rem"></Input>
            <Input type="number" placeholder="Longitude de destino" icon={<Exit />} value="" mb="3.6rem"></Input>
            <Button variant="primary" type="button">Encontrar melhor trajeto</Button>
        </StyledProjectSidebar>
    )
}

const MapZone = () => {
    return (
        <StyledMapZone>
        </StyledMapZone>
    )
}

const Controls = () => {
    return (
        <StyledControls>
            <Slider firstOption="Mapa" secondOption="Grafo"></Slider>
        </StyledControls>
    )
}

const ProjectContent = () => {
    return (
        <StyledProjectContent>
            <MapZone/>
            <Controls />
        </StyledProjectContent>
    )
}

export const Project = () => {
    return (
        <StyledProject>
            <ProjectSidebar />
            <ProjectContent />
        </StyledProject>
    )
}