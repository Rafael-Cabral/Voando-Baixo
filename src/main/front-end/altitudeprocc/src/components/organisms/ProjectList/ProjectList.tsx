
import { ProjectCard, ProjectCardProps } from "../../molecules/ProjectCard/ProjectCard"
import { StyledProjectList } from "./ProjectList.styles"

interface ProjectListProps {
    projects: Array<ProjectCardProps>,
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
}


export const ProjectList = ({projects, mb, mt, ml, mr}: ProjectListProps) => {
    return (
        <StyledProjectList mb={mb} mt={mt} ml={ml} mr={mr}>
            {projects.map((project) => (
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