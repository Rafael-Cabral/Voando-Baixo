import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const theme2 = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',
          color: 'white',
          elevation: 0,
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
          fontSize: '1.0rem',
          width: '200px',
          padding: 0,
        },
        text: {
          color: 'white',
          fontFamily: 'Plus Jakarta Suns, sans-serif',
        }
      }
    }
  }
});

function BotaoPg2() {
  return (
    <ThemeProvider theme={theme2}>
      <Button
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          top: '14%',
          left: '85%',
          transform: 'translate(-50%, -50%)',
          alignItems: 'center',
          '& > :first-child': {
            marginRight: '16px',
          }
        }}
      >
        Criar novo projeto
        <AddIcon color="primary" />
      </Button>
    </ThemeProvider>
  )
}

export default BotaoPg2;
