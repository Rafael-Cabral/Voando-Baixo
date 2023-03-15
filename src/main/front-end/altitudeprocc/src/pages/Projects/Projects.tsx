import { Input } from "../../components/atoms/Input/Input"
import { StyledProjects } from "./Projects.style"
import { ReactComponent as Search} from "../../assets/search.svg"

export const Projects = () => {
    return (
        <StyledProjects>
            <Input placeholder="Pesquisar" icon={<Search />}/>
        </StyledProjects>
    )
}