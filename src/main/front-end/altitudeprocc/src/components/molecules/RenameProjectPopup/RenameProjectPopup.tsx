import { Input } from "../../atoms/Input/Input";
import { Text } from "../../atoms/Text/Text";
import { StyledRenameProjectPopup } from "./RenameProjectPopup.styles";
import { ReactComponent as Folder } from "../../../assets/folder.svg";
import { Button } from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { Notyf } from "notyf";
import axios from "axios";
import { useState } from "react";

interface RenameProjectPopupProps {
    id: string;
    name: string;
    closePopup: any;
}

export const RenameProjectPopup = ({ id, name, closePopup }: React.PropsWithChildren<RenameProjectPopupProps>) => {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState<string>(name);

    const handleRenameProject = async () => {

        const notyf = new Notyf({duration: 3000});

        try {

            const json = JSON.stringify({
                project: {
                    name: inputValue,
                }
            });

            await axios.put(`http://localhost:3000/api/projects/${id}`, json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            notyf.success('Projeto renomeado com sucesso!');

            closePopup(false)

            navigate(0);

        } catch {

            notyf.error('Erro ao renomear projeto!');

            closePopup(false)

        }

    }


    return (
        <StyledRenameProjectPopup className="modalElement">
            <Text size="large" weight="semi" mb="3.2rem">Renomear projeto</Text>
            <Input type="text" icon={<Folder />} placeholder="Novo nome" value={name} mb="3.2rem" onChange={(event) => {setInputValue(event.target.value)}}></Input>
            <Button type="button" variant="primary" mb="1.6rem" onClick={async () => {await handleRenameProject()}}>Renomear projeto</Button>
            <Button type="button" variant="secondary" onClick={() => {closePopup(false)}}>Cancelar</Button>
        </StyledRenameProjectPopup>
    )
}