import { TextField, Button, Link } from "@mui/material";


function FooterMap() {
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
        <Button disabled variant="contained" size="small" 
        sx={{
          margin: '10px',
          // backgroundColor: '#000000',
          // color: 'white',
          borderRadius: '15px'
        }}> Mapa </Button>

        <Link href="/graph" underline="none"> 
          <Button size="small" 
          sx={{
            backgroundColor: 'white',
            color: '#000000',
            borderRadius: '15px'
          }}> Grafo </Button>
        </Link>
      </div>
    </div>
  );
}

export default FooterMap;