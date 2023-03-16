
import { useEffect, useState } from "react";
import { ProjectCard, ProjectCardProps } from "../../molecules/ProjectCard/ProjectCard"
import { StyledProjectList } from "./ProjectList.styles"

interface ProjectListProps {
    projects: Array<ProjectCardProps>,
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
    search: string;
}


export const ProjectList = ({projects, mb, mt, ml, mr, search}: ProjectListProps) => {

    const [projectList, setProjectList] = useState<Array<ProjectCardProps>>(projects);

    useEffect(() => {
        if(search.length > 0) {
            setProjectList(projects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase())));
        } else {
            setProjectList(projects);
        }
    }, [search]);

    return (
        <StyledProjectList mb={mb} mt={mt} ml={ml} mr={mr}>
            {projectList.map((project) => (
                <ProjectCard
                    id={project.id}
                    name={project.name}
                    data={project.data}
                    image={project.image}
                    mb="3.2rem"
                    mr="3.2rem"
                    key={project.id}
                />
            ))}
        </StyledProjectList>
    )
}