import { Button } from "../../atoms/Button/Button"
import { Text } from "../../atoms/Text/Text"
import { StyledHeaderLeft, StyledHeaderRight, StyledProjectsHeader } from "./ProjectsHeader.styles"
import { ReactComponent as Search } from "../../../assets/search.svg"
import { Input } from "../../atoms/Input/Input"
import { ReactComponent as Plus } from "../../../assets/plus.svg"

const HeaderLeft = () => {
    return (
        <StyledHeaderLeft>
            <Text size="xlarge" weight="bold">Projetos recentes</Text>
            <Text size="large" weight="regular" color="#52525B">Veja e administre suas estações de trabalho</Text>
        </StyledHeaderLeft> 
    )
}

const HeaderRight = () => {
    return (
        <StyledHeaderRight>
            <Input type="text" placeholder="Pesquisar" icon={<Search />} mr="2.4rem" value=""/>
            <Button type="button" variant="primary" icon={<Plus />}>Criar novo projeto</Button>
        </StyledHeaderRight>
    )
}

export const ProjectsHeader = () => {
    return (
        <StyledProjectsHeader>
            <HeaderLeft />
            <HeaderRight />
        </StyledProjectsHeader>
    )
}