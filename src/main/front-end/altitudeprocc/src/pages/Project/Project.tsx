import { Tag } from "../../components/atoms/Tag/Tag"
import { StyledControls, StyledCoordinateLabel, StyledMapZone, StyledPageDescription, StyledProject, StyledProjectContent, StyledProjectSidebar } from "./Project.style"
import { ReactComponent as Back } from "../../assets/back.svg";
import { Link, useParams } from "react-router-dom";
import { Text } from "../../components/atoms/Text/Text";
import { ReactComponent as A } from "../../assets/a.svg";
import { ReactComponent as B } from "../../assets/b.svg";
import { Input } from "../../components/atoms/Input/Input";
import { ReactComponent as Exit } from "../../assets/exit.svg";
import { Button } from "../../components/atoms/Button/Button";
import { Slider } from "../../components/atoms/Slider/Slider";
import { useEffect, useState } from "react";
import axios from "axios";

const CoordinateLabel = ({text, icon} : { text : string, icon : any}) => {
    return (
        <StyledCoordinateLabel>
            <Text size="small" weight="medium" mr="0.6rem" color="#667085">{ text }</Text>
            { icon && icon }
        </StyledCoordinateLabel>
    )
}

const PageDescription = ({projectName} : { projectName : string}) => {

    return (
        <StyledPageDescription>
            <Text size="small" weight="medium" color="#667085">Você está em</Text>
            <Text size="large" weight="semi" color="#18181B">{projectName}</Text>
        </StyledPageDescription>
    )
}

const ProjectSidebar = ({projectName} : {projectName:string}) => {

    const [disabled, setDisabled] = useState(true);
    const [originLatitude, setOriginLatitude] = useState("");
    const [originLongitude, setOriginLongitude] = useState("");
    const [destinationLatitude, setDestinationLatitude] = useState("");
    const [destinationLongitude, setDestinationLongitude] = useState("");

    useEffect(() => {
        if (originLatitude.length > 0 && originLongitude.length > 0 && destinationLatitude.length > 0 && destinationLongitude.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [originLatitude, originLongitude, destinationLatitude, destinationLongitude]);

    return (
        <StyledProjectSidebar>
            <Link to="/projects">
                <Tag icon={<Back />} iconPosition="left" mb="3.6rem">Voltar</Tag>
            </Link>
            <PageDescription projectName={projectName && projectName || "Carregando..."}/>
            <CoordinateLabel text="Origem" icon={<A />} />
            <Input type="number" placeholder="Latitude de origem" icon={<Exit />} value={originLatitude} mb="1.2rem" onChange={(event) => {setOriginLatitude(event.target.value)}}></Input>
            <Input type="number" placeholder="Longitude de origem" icon={<Exit />} value={originLongitude} mb="2.4rem" onChange={(event) => {setOriginLongitude(event.target.value)}}></Input>
            <CoordinateLabel text="Destino" icon={<B />} />
            <Input type="number" placeholder="Latitude de destino" icon={<Exit />} value={destinationLatitude} mb="1.2rem" onChange={(event) => {setDestinationLatitude(event.target.value)}}></Input>
            <Input type="number" placeholder="Longitude de destino" icon={<Exit />} value={destinationLongitude} mb="3.6rem" onChange={(event) => {setDestinationLongitude(event.target.value)}}></Input>
            <Button variant="primary" type="button" disabled={disabled}>Encontrar melhor trajeto</Button>
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

    const { projectId } = useParams();

    interface IProject {
        id: string;
        name: string;
        dt2file: string;
        createdAt: string;
        status: "processing" | "processed";
    }

    const [project, setProject] = useState<IProject>({id: "", name: "", dt2file: "", createdAt: "", status: "processing"});

    const loadProject = async () => {

        try {
            const response = await axios.get(`http://localhost:3000/api/projects/${projectId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setProject(response.data?.success.data);
        } catch {
            setProject({ id: "", name: "", dt2file: "", createdAt: "", status: "processing"});
        }
    }

    useEffect(() => {
        loadProject();
    }, []);


    return (
        <StyledProject>
            <ProjectSidebar projectName={project?.name}/>
            <ProjectContent />
        </StyledProject>
    )
}