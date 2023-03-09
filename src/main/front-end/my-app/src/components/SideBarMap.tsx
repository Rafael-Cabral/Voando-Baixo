import { Button, Box, FormControl } from "@mui/material";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function SidebarMap() {
    return (
      <div id='sidebar' className='sidebar'>
      <Link href="/app" id='returnButton'>Voltar</Link>
        <br /><br /> Você está em
        <Typography variant="h2" fontWeight="bold">Operação 1</Typography>
        <br />
        <FormControl>
          <Box>Origem A:</Box> <br />
          <TextField id='latitude' name='latitude' className='coordinatesInput' placeholder='Latitude de Origem'/>
          <TextField id='longitude' name='longitude' className='coordinatesInput' placeholder='Longitude de Origem '/>
          <br /><br />
          <Box>Destino B:</Box> <br />
          <TextField id='latitude2' name='latitude2' className='coordinatesInput' placeholder='Latitude de Destino'/>
          <TextField id='longitude2' name='longitude2' className='coordinatesInput' placeholder='Longitude de Destino'/>
        </FormControl>
        <br /><br />
        <Button id='getPathButton'>Encontrar Melhor Trajeto</Button>
      </div>
    );
  }

  export default SidebarMap;