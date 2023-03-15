import { Input } from "../../components/atoms/Input/Input"
import { StyledProjects } from "./Projects.style"
import { ReactComponent as Search} from "../../assets/search.svg"
import { ProjectsHeader } from "../../components/molecules/ProjectsHeader/ProjectsHeader"

export const Projects = () => {
    return (
        <StyledProjects>
            <ProjectsHeader />
        </StyledProjects>
    )
}