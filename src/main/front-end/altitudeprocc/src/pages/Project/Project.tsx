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
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiZWxpYXNiaW9uZG8iLCJhIjoiY2xmaWFlNHo0MDA5bDNwbWk4bjJlYjh4YiJ9.q4l1ugFTPCZi70qHmWkM7g";

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

const MapZone = ({project} : {project:IProject}) => {

    if(!project.map) {
        return <></>
    }

    const topLeftLongitude = project.map.topLeft[1];
  const topLeftLatitude = project.map.topLeft[0];
  const bottomRightLongitude = project.map.bottomRight[1];
  const bottomRightLatitude = project.map.bottomRight[0];
  const centeredLongitude = (topLeftLongitude + bottomRightLongitude) / 2;
  const centeredLatitude = (topLeftLatitude + bottomRightLatitude) / 2;

  const mapContainer = useRef("");
  const map = useRef<any>(null);
  const [lng, setLng] = useState(centeredLongitude);
  const [lat, setLat] = useState(centeredLatitude);
  const [zoom, setZoom] = useState(9);

  const bounds = [
    topLeftLongitude, topLeftLatitude, bottomRightLongitude, bottomRightLatitude
  ];

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [centeredLongitude, centeredLatitude],
      zoom: zoom,
    });

    map.current.on('load', () => {
      // Add a new layer with the GeoJSON rectangle hole
      map.current.addSource('rectangle-hole', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-180, -90],
                [180, -90],
                [180, 90],
                [-180, 90],
                [-180, -90],
              ],
              [
                [topLeftLongitude, topLeftLatitude],
                [bottomRightLongitude, topLeftLatitude],
                [bottomRightLongitude, bottomRightLatitude],
                [topLeftLongitude, bottomRightLatitude],
                [topLeftLongitude, topLeftLatitude],
              ],
            ],
          },
        },
      });

      // Add the rectangle hole layer to the map
      map.current.addLayer({
        id: 'rectangle-hole',
        type: 'fill',
        source: 'rectangle-hole',
        layout: {},
        paint: {
          'fill-color': '#E0E0E0',
          'fill-opacity': 1,
        },
      });
    });
  });

    return (
        <StyledMapZone ref={mapContainer} className="map-container">
            
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

const ProjectContent = ({project} : {project : IProject}) => {
    return (
        <StyledProjectContent id="project-content">
            <MapZone project={project}/>
            <Controls />
        </StyledProjectContent>
    )
}

interface IProject {
    id: string;
    name: string;
    dt2file: string;
    createdAt: string;
    status: "processing" | "processed";
    map?: {
        topLeft: [number, number],
        topRight: [number, number],
        bottomLeft: [number, number],
        bottomRight: [number, number]
    }
}

export const Project = () => {

    const { projectId } = useParams();

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
            <ProjectContent project={project}/>
        </StyledProject>
    )
}