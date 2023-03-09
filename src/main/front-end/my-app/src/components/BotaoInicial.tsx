import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const theme = createTheme({
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
            fontSize: '1.2rem',
            width: '400px',
            padding: '0 32px',
          },
          text: {
            color: 'white',
            fontFamily: 'Plus Jakarta Suns, sans-serif',
          }
        }
      }
    }
  });
  
  function BotaoInicial() {
    return (
      <ThemeProvider theme={theme}>
        <Button
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            top: '65%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            alignItems: 'center',
            '& > :first-child': {
              marginRight: '16px',
            }
          }}
        >
          Começar agora
          <ArrowForwardIcon color="primary" />
        </Button>
      </ThemeProvider>
    )
  }
  

export default BotaoInicial;
