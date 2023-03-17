import React, { useEffect, useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Text } from "../../atoms/Text/Text";
import { StyledCreateProjectPopup } from "./CreateProjectPopup.styles"
import { ReactComponent as Folder } from "../../../assets/folder.svg";
import { UploadFile } from "../../atoms/UploadFile/UploadFile";

interface CreateProjectPopupProps {
    closePopup: any;
}

export const CreateProjectPopup = ({closePopup} : React.PropsWithChildren<CreateProjectPopupProps>) => {

    const [fileInput, setFileInput] = React.useState<File>();
    const [projectName, setProjectName] = useState<string>("");
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (fileInput && projectName) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [fileInput, projectName]);

    return (
        <StyledCreateProjectPopup>
            <Text size="large" weight="semi" mb="3.2rem">Criar novo projeto</Text>
            <Input type="text" icon={<Folder />} placeholder="Nome do projeto" value={projectName} mb="1.6rem" onChange={(event) => {setProjectName(event.target.value)}}></Input>
            <UploadFile mb="3.2rem" fileInput={fileInput} setFileInput={setFileInput}/>
            <Button type="button" variant="primary" mb="1.6rem" disabled={isButtonDisabled}>Criar projeto</Button>
            <Button type="button" variant="secondary" onClick={() => {closePopup(false)}}>Cancelar</Button>
        </StyledCreateProjectPopup>
    )
}