import { Box } from "@mui/material";

function VisualizationMap() {
    return (
        <div id='visualization' className='visualization'
        style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '72.74%',
            height: '90.87%',
            background: '#E0E0E0'

        }}>
            <div id='vertexInfo'
            style={{
                display: 'none',
                position: 'absolute',
                borderRadius: '5',
                border: '1px solid #000',
                padding: '10px',
                zIndex: '1',
            }}>
                <Box id='vertexId'></Box><br />
                <Box id='vertexAltitude'></Box><br />
                <Box id='vertexLatitude'></Box><br />
                <Box id='vertexLongitude'></Box>
            </div>
        </div>
    );
}

export default VisualizationMap;