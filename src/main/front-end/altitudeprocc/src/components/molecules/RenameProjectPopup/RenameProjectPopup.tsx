import { Input } from "../../atoms/Input/Input";
import { Text } from "../../atoms/Text/Text";
import { StyledRenameProjectPopup } from "./RenameProjectPopup.styles";
import { ReactComponent as Folder } from "../../../assets/folder.svg";
import { Button } from "../../atoms/Button/Button";

interface RenameProjectPopupProps {
    id: string;
    name: string;
    closePopup: any;
}

export const RenameProjectPopup = ({ id, name, closePopup }: React.PropsWithChildren<RenameProjectPopupProps>) => {
    return (
        <StyledRenameProjectPopup className="modalElement">
            <Text size="large" weight="semi" mb="3.2rem">Renomear projeto</Text>
            <Input type="text" icon={<Folder />} placeholder="Novo nome" value={name} mb="3.2rem"></Input>
            <Button type="button" variant="primary" mb="1.6rem">Renomear projeto</Button>
            <Button type="button" variant="secondary" onClick={() => {closePopup(false)}}>Cancelar</Button>
        </StyledRenameProjectPopup>
    )
}