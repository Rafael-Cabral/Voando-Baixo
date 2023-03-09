import { Box } from "@mui/material";

function VisualizationMap() {
    return (
        <Box id='visualization' className='visualization'
        sx={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '70%',
            height: '95%'
        }}>
            <Box id='vertexInfo'>
                <Box id='vertexId'></Box><br />
                <Box id='vertexAltitude'></Box><br />
                <Box id='vertexLatitude'></Box><br />
                <Box id='vertexLongitude'></Box>
            </Box>
        </Box>
    );
}

export default VisualizationMap;