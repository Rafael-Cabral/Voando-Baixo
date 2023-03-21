
import axios from "axios";
import { useEffect, useState } from "react";
import { ProjectCard, ProjectCardProps } from "../../molecules/ProjectCard/ProjectCard"
import { StyledProjectList } from "./ProjectList.styles"

interface ProjectListProps {
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
    search: string;
}


export const ProjectList = ({ mb, mt, ml, mr, search}: ProjectListProps) => {

    const [projectList, setProjectList] = useState<Array<ProjectCardProps>>([]);
    const [projectListCopy, setProjectListCopy] = useState<Array<ProjectCardProps>>([]);

    useEffect(() => {
        if(search.length > 0) {
            setProjectList(projectList.filter((project) => project.name.toLowerCase().includes(search.toLowerCase())));
        } else {
            setProjectList(projectListCopy);
        }
    }, [search]);

    const getProjects = async () => {

        const response = await axios.get('http://localhost:3000/api/projects')

        const projects = response.data?.success.data.map((project: any) => {

            const dateObj = project.createdAt; 
            const date = new Date(dateObj);

            const dayOfMonth = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const year = date.getFullYear().toString();

            const formattedDate = `${dayOfMonth}/${month}/${year}`;

            return {
                id: project.id,
                name: project.name,
                date: formattedDate,
                image: "https://i.imgur.com/QY9WEyH.png",
                status: project.status
            }
        });

        setProjectListCopy(projects);

        setProjectList(projects);

    }

    useEffect(() => {

        getProjects();
        
    }, []);

    return (
        <StyledProjectList mb={mb} mt={mt} ml={ml} mr={mr}>
            {projectList && projectList.map((project) => (
                <ProjectCard
                    id={project.id}
                    name={project.name}
                    date={project.date}
                    image={project.image}
                    mb="3.2rem"
                    mr="3.2rem"
                    key={project.id}
                    status={project.status}
                />
            ))}
        </StyledProjectList>
    )
}