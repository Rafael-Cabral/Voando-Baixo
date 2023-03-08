import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Title() {
  return (
    <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
      Planejador de trajetórias<br/> para voos à baixa altitude
    </Typography>
  );
}

function Description() {
  return (
    <Typography variant="body1" gutterBottom align="center">
      Otimize a segurança e efetividade de suas missões com nossa solução avançada de cálculo de rotas e trajetórias.
    </Typography>
  );
}

function TextoInicial() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: '170px auto 0', textAlign: 'center' }}>
      <Title />
      <Description />
    </Box>
  );
}

export default TextoInicial;
