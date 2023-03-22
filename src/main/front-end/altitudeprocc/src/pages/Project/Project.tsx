import { Tag } from "../../components/atoms/Tag/Tag"
import { StyledControls, StyledCoordinateLabel, StyledFindingBestRoute, StyledMapZone, StyledPageDescription, StyledProject, StyledProjectContent, StyledProjectSidebar } from "./Project.style"
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
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { Notyf } from "notyf";

mapboxgl.accessToken = "pk.eyJ1IjoiZWxpYXNiaW9uZG8iLCJhIjoiY2xmaWFlNHo0MDA5bDNwbWk4bjJlYjh4YiJ9.q4l1ugFTPCZi70qHmWkM7g";

interface IProject {
    id: string;
    name: string;
    dt2file: string;
    createdAt: string;
    status: "processing" | "processed" | "routing" | "routed";
    map?: {
        topLeft: [number, number],
        topRight: [number, number],
        bottomLeft: [number, number],
        bottomRight: [number, number]
    }
}

const FindingBestRoute = () => {

    const [countdown, setCountdown] = useState(30);

    useEffect(() => {

        const interval = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(interval);
            window.location.reload();
        }

        return () => clearInterval(interval);

    }, [countdown]);

    return (
        <StyledFindingBestRoute>
            <Loading />
            <Text size="large" weight="semi" color="#18181B" mt="1.6rem">Aguarde enquanto encontramos a melhor rota...</Text>
            <Text mt="1.6rem">Isso pode levar alguns minutos. Você pode fechar essa página e voltar mais tarde.</Text>
            <Text mt="1.6rem">Recarregando a página em {countdown} segundos...</Text>
        </StyledFindingBestRoute>
    )
}

const CoordinateLabel = ({ text, icon }: { text: string, icon: any }) => {
    return (
        <StyledCoordinateLabel>
            <Text size="small" weight="medium" mr="0.6rem" color="#667085">{text}</Text>
            {icon && icon}
        </StyledCoordinateLabel>
    )
}

const PageDescription = ({ projectName }: { projectName: string }) => {

    return (
        <StyledPageDescription>
            <Text size="small" weight="medium" color="#667085">Você está em</Text>
            <Text size="large" weight="semi" color="#18181B">{projectName}</Text>
        </StyledPageDescription>
    )
}

const ProjectSidebar = ({ project, setProject }: { project: IProject, setProject : any }) => {

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

    const minLatitude = project.map?.bottomRight[0].toFixed(5);
    const maxLatitude = project.map?.topLeft[0].toFixed(5);
    const minLongitude = project.map?.topLeft[1].toFixed(5);
    const maxLongitude = project.map?.bottomRight[1].toFixed(5);

    const handleClick = async () => {

        const json = {
            route: {
                origin: {
                    latitude: parseFloat(originLatitude),
                    longitude: parseFloat(originLongitude)
                },
                destination: {
                    latitude: parseFloat(destinationLatitude),
                    longitude: parseFloat(destinationLongitude)
                }
            }
        }

        const notyf = new Notyf({duration: 3000});

        try {
            
            const response = await axios.post(`http://localhost:3000/api/projects/${project.id}/best-route`, json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            notyf.success("Solicitação de melhor rota enviada com sucesso!");

            setProject({
                ...project,
                status: "routing"
            })

        } catch (error) {

            notyf.error("Ocorreu um erro ao tentar encontrar a melhor rota. Tente novamente mais tarde.");

        }



    }

    return (
        <StyledProjectSidebar>
            <Link to="/projects">
                <Tag icon={<Back />} iconPosition="left" mb="3.6rem">Voltar</Tag>
            </Link>
            <PageDescription projectName={project.name && project.name || "Carregando..."} />
            <CoordinateLabel text="Origem" icon={<A />} />
            <Input type="number" placeholder="Latitude de origem" icon={<Exit />} value={originLatitude} mb="1.2rem" onChange={(event) => { setOriginLatitude(event.target.value) }} min={minLatitude} max={maxLatitude} step={0.00001}></Input>
            <Input type="number" placeholder="Longitude de origem" icon={<Exit />} value={originLongitude} mb="2.4rem" onChange={(event) => { setOriginLongitude(event.target.value) }} min={minLongitude} max={maxLongitude} step={0.00001}></Input>
            <CoordinateLabel text="Destino" icon={<B />} />
            <Input type="number" placeholder="Latitude de destino" icon={<Exit />} value={destinationLatitude} mb="1.2rem" onChange={(event) => { setDestinationLatitude(event.target.value) }} min={minLatitude} max={maxLatitude} step={0.00001}></Input>
            <Input type="number" placeholder="Longitude de destino" icon={<Exit />} value={destinationLongitude} mb="3.6rem" onChange={(event) => { setDestinationLongitude(event.target.value) }} min={minLongitude} max={maxLongitude} step={0.00001}></Input>
            <Button variant="primary" type="button" disabled={disabled} onClick={async () => {await handleClick()}}>Encontrar melhor trajeto</Button>
        </StyledProjectSidebar>
    )
}

const MapZone = ({ project }: { project: IProject }) => {

    if (!project.map) {
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

    const [circleA, setCircleA] = useState([topLeftLongitude, topLeftLatitude]);
    const [circleB, setCircleB] = useState([bottomRightLongitude, bottomRightLatitude]);
    const [pathCoordinates, setPathCoordinates] = useState([[topLeftLongitude, topLeftLatitude], [bottomRightLongitude, bottomRightLatitude]]);


    const bounds = [
        topLeftLongitude, topLeftLatitude, bottomRightLongitude, bottomRightLatitude
    ];

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            // Satelite style
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

            addPath();
            addCircles();
            addCircleALabel();
            addCircleBLabel();
    
        });
    });

    function addCircles() {
        map.current.addSource("circleA", {
            type: "geojson",
            data: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: circleA,
                },
            },
        });
    
        map.current.addSource("circleB", {
            type: "geojson",
            data: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: circleB,
                },
            },
        });
    
        map.current.addLayer({
            id: "circleA",
            type: "circle",
            source: "circleA",
            paint: {
                "circle-radius": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5, 5,
                    16, 24,
                ],
                "circle-color": "#2F80ED",
            },
        });
    
        map.current.addLayer({
            id: "circleB",
            type: "circle",
            source: "circleB",
            paint: {
                "circle-radius": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5, 5,
                    16, 24,
                ],
                "circle-color": "#2F80ED",
            },
        });
    }
    
    function addPath() {
        map.current.addSource("path", {
            type: "geojson",
            data: {
                type: "Feature",
                geometry: {
                    type: "LineString",
                    coordinates: pathCoordinates,
                },
            },
        });
    
        map.current.addLayer({
            id: "path",
            type: "line",
            source: "path",
            layout: {
                "line-join": "round",
                "line-cap": "round",
            },
            paint: {
                "line-color": "#2F80ED",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5, 1,
                    16, 5,
                ],
            },
        });
    }
    
    function addCircleALabel() {
        map.current.addSource("circleALabel", {
            type: "geojson",
            data: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: circleA,
                },
                properties: {
                    title: "A",
                },
            },
        });
    
        map.current.addLayer({
            id: "circleALabel",
            type: "symbol",
            source: "circleALabel",
            layout: {
                "text-field": "{title}",
                "text-font": ["Open Sans Bold"],
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5, 3,
                    16, 12,
                ],
                "text-offset": [0, 0], // Posição relativa ao círculo
            },
            paint: {
                "text-color": "#FFFFFF",
            },
        });
    }
    
    function addCircleBLabel() {
        map.current.addSource("circleBLabel", {
            type: "geojson",
            data: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: circleB,
                },
                properties: {
                    title: "B",
                },
            },
        });
    
        map.current.addLayer({
            id: "circleBLabel",
            type: "symbol",
            source: "circleBLabel",
            layout: {
                "text-field": "{title}",
                "text-font": ["Open Sans Bold"],
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    5, 3,
                    16, 12,
                ],
                "text-offset": [0, 0], // Posição relativa ao círculo
            },
            paint: {
                "text-color": "#FFFFFF",
            },
        });
    }
    

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

const ProjectContent = ({ project }: { project: IProject }) => {
    return (
        <StyledProjectContent id="project-content">
            <MapZone project={project} />
            <Controls />
        </StyledProjectContent>
    )
}

export const Project = () => {

    const { projectId } = useParams();

    const [project, setProject] = useState<IProject>({ id: "", name: "", dt2file: "", createdAt: "", status: "processing" });

    const loadProject = async () => {

        try {
            const response = await axios.get(`http://localhost:3000/api/projects/${projectId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setProject(response.data?.success.data);
        } catch {
            setProject({ id: "", name: "", dt2file: "", createdAt: "", status: "processing" });
        }
    }

    useEffect(() => {
        loadProject();
    }, []);


    return (
        <StyledProject>
            { project.status === "routing" ? <FindingBestRoute /> : (
                <>
                    <ProjectSidebar project={project} setProject={setProject}/>
                    <ProjectContent project={project} />
                </>
            )}
        </StyledProject>
    )
}