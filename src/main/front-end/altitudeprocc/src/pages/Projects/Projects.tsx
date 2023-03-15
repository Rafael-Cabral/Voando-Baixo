import { Input } from "../../components/atoms/Input/Input"
import { StyledProjects } from "./Projects.style"
import { ReactComponent as Search} from "../../assets/search.svg"

export const Projects = () => {
    return (
        <StyledProjects>
            <Input type="text" placeholder="Pesquisar" icon={<Search />}/>
        </StyledProjects>
    )
}