import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text/Text';
import { UploadInput, UploadWrapper } from './UploadFile.style';

export const UploadFile = ({mb, mt, ml, mr, fileInput, setFileInput}: React.PropsWithChildren<any>) => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileInput(event.target.files[0]);
        } else {
            setFileInput(undefined);
        }
    }

    return (
        <UploadWrapper mb={mb} mt={mt} ml={ml} mr={mr} htmlFor="file">

            {!fileInput ? ( 
                <>
                    <Text size="small" weight="bold" color="#919299" align="center">Dados de elevação do terreno</Text>
                    <Text size="small" weight="regular" color="#919299" maxWidth="24rem" align="center">clique para navegar até o arquivo <br/>(apenas .dt2)</Text>
                </>
            ) : (
                    <Text size="small" weight="bold" color="#919299" align="center"> {fileInput.name}</Text>
            )}

            <UploadInput type="file" id="file" accept=".dt2" onChange={handleFileChange}/>

        </UploadWrapper>
    );
}
