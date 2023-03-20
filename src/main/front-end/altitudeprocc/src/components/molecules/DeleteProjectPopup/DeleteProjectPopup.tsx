import { Input } from "../../atoms/Input/Input";
import { Text } from "../../atoms/Text/Text";
import { StyledDeleteProjectPopup } from "./DeleteProjectPopup.styles";
import { ReactComponent as Folder } from "../../../assets/folder.svg";
import { Button } from "../../atoms/Button/Button";
import axios from "axios";
import { Notyf } from "notyf";
import { useNavigate } from "react-router-dom";

interface DeleteProjectPopupProps {
    id: string;
    name: string;
    closePopup: any;
}

export const DeleteProjectPopup = ({ id, name, closePopup }: React.PropsWithChildren<DeleteProjectPopupProps>) => {

    const navigate = useNavigate();

    const handleDeleteProject = async () => {

        const notyf = new Notyf({duration: 3000});

        try {

            await axios.delete(`http://localhost:3000/api/projects/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            notyf.success('Projeto excluído com sucesso!');

            closePopup(false)

            navigate(0);

        } catch {

            notyf.error('Erro ao excluir projeto!');

            closePopup(false)

        }

    }

    return (
        <StyledDeleteProjectPopup className="modalElement">
            <Text size="large" weight="semi" mb="3.2rem">Excluir projeto</Text>
            <Input type="text" icon={<Folder />} placeholder="Nome do projeto" value={name} mb="3.2rem" disabled={true}></Input>
            <Button type="button" variant="primary" mb="1.6rem" onClick={() => {handleDeleteProject()}}>Excluir projeto</Button>
            <Button type="button" variant="secondary" onClick={() => {closePopup(false)}}>Cancelar</Button>
        </StyledDeleteProjectPopup>
    )
}