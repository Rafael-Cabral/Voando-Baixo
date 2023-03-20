import React, { useEffect, useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Text } from "../../atoms/Text/Text";
import { StyledCreateProjectPopup } from "./CreateProjectPopup.styles"
import { ReactComponent as Folder } from "../../../assets/folder.svg";
import { UploadFile } from "../../atoms/UploadFile/UploadFile";
import axios from "axios";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import { useNavigate } from "react-router-dom";

interface CreateProjectPopupProps {
    closePopup: any;
}

export const CreateProjectPopup = ({closePopup} : React.PropsWithChildren<CreateProjectPopupProps>) => {

    const [fileInput, setFileInput] = React.useState<File>();
    const [uploadStatus, setUploadStatus] = React.useState<string>("Upload em andamento: 0%");
    const [uploadedFileData, setUploadedFileData] = useState<any>({});
    const [projectName, setProjectName] = useState<string>("");
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (fileInput && projectName.length > 0 && uploadStatus === "Upload concluído!" && uploadedFileData) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [fileInput, projectName, uploadStatus, uploadedFileData]);

    const handleCreateProject = async () => {

        const json = JSON.stringify({
            project: {
                name: projectName,
                objectKey: uploadedFileData.objectKey,
            }
        });

        const notyf = new Notyf({duration: 3000});

        try {

            await axios.post('http://localhost:3000/api/projects', json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            notyf.success("Projeto criado com sucesso!");

            navigate(0);

        } catch (error) {

            notyf.error("Erro ao criar projeto!");

        }

        closePopup(false)

    }

    return (
        <StyledCreateProjectPopup>
            <Text size="large" weight="semi" mb="3.2rem">Criar novo projeto</Text>
            <Input type="text" icon={<Folder />} placeholder="Nome do projeto" value={projectName} mb="1.6rem" onChange={(event) => {setProjectName(event.target.value)}}></Input>
            <UploadFile mb="3.2rem" fileInput={fileInput} setFileInput={setFileInput} uploadStatus={uploadStatus} setUploadStatus={setUploadStatus} uploadedFileData={uploadedFileData} setUploadedFileData={setUploadedFileData}/>
            <Button type="button" variant="primary" mb="1.6rem" disabled={isButtonDisabled} onClick={() => {handleCreateProject()}}>Criar projeto</Button>
            <Button type="button" variant="secondary" onClick={() => {closePopup(false)}}>Cancelar</Button>
        </StyledCreateProjectPopup>
    )
}