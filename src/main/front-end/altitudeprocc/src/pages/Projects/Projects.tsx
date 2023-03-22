import { StyledProjects } from "./Projects.style"
import { ProjectsHeader } from "../../components/organisms/ProjectsHeader/ProjectsHeader"
import { ProjectList } from "../../components/organisms/ProjectList/ProjectList"
import { useState } from "react";

export const Projects = () => {

    const [search, setSearch] = useState<string>("");

    return (
        <StyledProjects>
            <ProjectsHeader search={search} setSearch={setSearch}/>
            <ProjectList mt="6.4rem" search={search}></ProjectList>
        </StyledProjects>
    )
}