import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '../Text/Text';
import { UploadInput, UploadWrapper } from './UploadFile.style';
import axios from 'axios';

export const UploadFile = ({mb, mt, ml, mr, fileInput, setFileInput, uploadStatus, setUploadStatus, uploadedFileData, setUploadedFileData}: React.PropsWithChildren<any>) => {

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.files && event.target.files.length > 0) {

            setFileInput(event.target.files[0]);

        } else {

            setFileInput(undefined);

        }

    }

    const handleFileUpload = async () => {

        const formData = new FormData();

        formData.append('file', fileInput);

        const response = await axios.post('http://localhost:3000/api/uploads', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / (total || 1));
                if (percent < 100) {
                    setUploadStatus(`Upload em andamento: ${percent}%`);
                } else {
                    setUploadStatus(`Upload concluído!`);
                }
            }
        });

        setUploadedFileData(response.data?.success?.data);
        
    }

    useEffect(() => {
        if(fileInput) {
            handleFileUpload();
        }
    }, [fileInput])

    return (
        <UploadWrapper mb={mb} mt={mt} ml={ml} mr={mr} htmlFor="file">

            {!fileInput ? ( 
                <>
                    <Text size="small" weight="bold" color="#919299" align="center">Dados de elevação do terreno</Text>
                    <Text size="small" weight="regular" color="#919299" maxWidth="24rem" align="center">clique para navegar até o arquivo <br/>(apenas .dt2)</Text>
                </>
            ) : (
                <>
                    <Text size="small" weight="bold" color="#919299" align="center"> {fileInput.name}</Text>
                    <Text size="small" weight="regular" color="#919299" maxWidth="24rem" align="center">{uploadStatus}</Text>
                </>
            )}

            <UploadInput type="file" id="file" accept=".dt2" onChange={handleFileChange}/>

        </UploadWrapper>
    );
}
