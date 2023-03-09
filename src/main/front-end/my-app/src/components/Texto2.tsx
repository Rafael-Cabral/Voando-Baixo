import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Title2() {
return (
<Typography variant="h4" gutterBottom align="left" fontWeight="bold">
Projetos recentes
</Typography>
);
}

function Description2() {
return (
<Typography variant="h6" color="text.secondary" gutterBottom align="left">
Veja e administre suas estações de trabalho
</Typography>
);
}

function Texto2() {
return (
<Box sx={{ width: '100%', maxWidth: 500, position: 'absolute', top: '17%', left: '24%', transform: 'translate(-50%, -50%)' }}>
<Title2 />
<Description2 />
</Box>
);
}

export default Texto2;