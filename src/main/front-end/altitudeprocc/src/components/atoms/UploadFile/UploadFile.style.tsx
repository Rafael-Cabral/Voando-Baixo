import styled from 'styled-components';


interface UploadFileProps {
    mb?: string;
    mt?: string;
    ml?: string;
    mr?: string;
}

export const UploadInput = styled.input`
    display: none;
`;

export const UploadWrapper = styled.label<UploadFileProps>`
    width: 36rem;
    height: 26rem;
    border-radius: 2.5rem;
    border: 2px dashed #E2E6EA;
    cursor: pointer;
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
    color: #919299;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: ${(props: UploadFileProps) => props.mb || "0"};
    margin-top: ${(props: UploadFileProps) => props.mt || "0"};
    margin-left: ${(props: UploadFileProps) => props.ml || "0"};
    margin-right: ${(props: UploadFileProps) => props.mr || "0"};
`;