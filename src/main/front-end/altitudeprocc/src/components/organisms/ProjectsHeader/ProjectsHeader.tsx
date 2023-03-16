import { Button } from "../../atoms/Button/Button"
import { Text } from "../../atoms/Text/Text"
import { StyledHeaderLeft, StyledHeaderRight, StyledProjectsHeader } from "./ProjectsHeader.styles"
import { ReactComponent as Search } from "../../../assets/search.svg"
import { Input } from "../../atoms/Input/Input"
import { ReactComponent as Plus } from "../../../assets/plus.svg"
import React from "react"

const HeaderLeft = () => {
    return (
        <StyledHeaderLeft>
            <Text size="xlarge" weight="bold">Projetos recentes</Text>
            <Text size="large" weight="regular" color="#52525B">Veja e administre suas estações de trabalho</Text>
        </StyledHeaderLeft> 
    )
}

const HeaderRight = ({ search, setSearch } : { search : string, setSearch : React.Dispatch<React.SetStateAction<string>> }) => {

    const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <StyledHeaderRight>
            <Input type="text" placeholder="Pesquisar" icon={<Search />} mr="2.4rem" value={search} onChange={handleSearch}/>
            <Button type="button" variant="primary" icon={<Plus />}>Criar novo projeto</Button>
        </StyledHeaderRight>
    )
}

export const ProjectsHeader = ({ search, setSearch } : { search : string, setSearch : React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <StyledProjectsHeader>
            <HeaderLeft />
            <HeaderRight search={search} setSearch={setSearch}/>
        </StyledProjectsHeader>
    )
}