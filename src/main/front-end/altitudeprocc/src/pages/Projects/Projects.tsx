import { StyledProjects } from "./Projects.style"
import { ProjectsHeader } from "../../components/organisms/ProjectsHeader/ProjectsHeader"
import { ProjectList } from "../../components/organisms/ProjectList/ProjectList"
import { useState } from "react";

export const Projects = () => {

    const [search, setSearch] = useState<string>("");

    return (
        <StyledProjects>
            <ProjectsHeader search={search} setSearch={setSearch}/>
            <ProjectList projects={[{id: "1", name:"Operação 1", data:"20/02/2023", image: "https://i.imgur.com/QY9WEyH.png" }, {id: "2", name:"Operação 2", data:"20/02/2023", image:"https://i.imgur.com/QY9WEyH.png" }]} mt="6.4rem" search={search}></ProjectList>
        </StyledProjects>
    )
}