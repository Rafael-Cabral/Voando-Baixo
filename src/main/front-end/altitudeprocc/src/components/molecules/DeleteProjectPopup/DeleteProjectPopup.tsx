import { Input } from "../../atoms/Input/Input";
import { Text } from "../../atoms/Text/Text";
import { StyledDeleteProjectPopup } from "./DeleteProjectPopup.styles";
import { ReactComponent as Folder } from "../../../assets/folder.svg";
import { Button } from "../../atoms/Button/Button";

interface DeleteProjectPopupProps {
    id: string;
    name: string;
    closePopup: any;
}

export const DeleteProjectPopup = ({ id, name, closePopup }: React.PropsWithChildren<DeleteProjectPopupProps>) => {
    return (
        <StyledDeleteProjectPopup className="modalElement">
            <Text size="large" weight="semi" mb="3.2rem">Excluir projeto</Text>
            <Input type="text" icon={<Folder />} placeholder="Nome do projeto" value={name} mb="3.2rem" disabled={true}></Input>
            <Button type="button" variant="primary" mb="1.6rem">Excluir projeto</Button>
            <Button type="button" variant="secondary" onClick={() => {closePopup(false)}}>Cancelar</Button>
        </StyledDeleteProjectPopup>
    )
}