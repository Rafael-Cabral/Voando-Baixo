import { StyledProjects } from "./Projects.style"
import { ProjectsHeader } from "../../components/organisms/ProjectsHeader/ProjectsHeader"
import { ProjectList } from "../../components/organisms/ProjectList/ProjectList"

export const Projects = () => {
    return (
        <StyledProjects>
            <ProjectsHeader />
            <ProjectList projects={[{id: "1", name:"Operação 1", data:"20/02/2023" }, {id: "2", name:"Operação 2", data:"20/02/2023" }]} mt="6.4rem"></ProjectList>
        </StyledProjects>
    )
}