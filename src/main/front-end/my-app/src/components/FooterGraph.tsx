import { TextField, Button, Link } from "@mui/material";
// import { Link } from "react-router-dom";


function FooterGraph() {
  return (
    <div className='container-fluid' id='footer-lat-long'>
      <div className='bottom-nav'
        style={{
          position: 'fixed',
          display: 'flex',
          bottom: '0',
          right: '0',
          flexDirection: 'row-reverse',
          float: 'right',
          width: '71.35%',
          backgroundColor: '#f5f5f5d3',
          alignItems: 'center',
          height: '6%',
          padding: '10px'

        }}>
        <TextField size="small" label="Longitude" sx={{ paddingRight: '30px', width: '16%' }} />
        <TextField size="small" label="Latitude" sx={{ paddingRight: '30px', width: '16%' }} />
      </div>

      <div className='map-graph'
        style={{
          position: 'fixed',
          display: 'flex',
          bottom: '0',
          right: '0',
          float: 'left',
          width: '71.35%',
          alignItems: 'center',
          height: '6%',
          padding: '10px',
          paddingLeft: '20px',
          color: 'black'
        }}>
        Visualização
        <Link href="/map" underline="none" >
          <Button size="small"
            sx={{
              margin: '10px',
              backgroundColor: 'white',
              color: '#000000',
              borderRadius: '15px'
            }}> Mapa </Button>
        </Link>

        <Button disabled variant="contained" size="small"
          sx={{
            borderRadius: '15px'
          }}> Grafo </Button>
      </div>
    </div>
  );
}

export default FooterGraph;