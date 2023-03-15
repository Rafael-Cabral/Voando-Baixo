import { Button } from '../../components/atoms/Button/Button';
import { Logo } from '../../components/atoms/Logo/Logo';
import { Text } from '../../components/atoms/Text/Text';
import { StyledHome } from './Home.style';
import { ReactComponent as Next } from '../../assets/next.svg';

export const Home = () => {
    return (
        <StyledHome>
            <Logo mb='3.2rem'/>
            <Text size='xlarge' weight='bold' maxWidth='66rem' align='center' mb='3.2rem'>Planejador de trajetórias para voos à baixa altitude</Text>
            <Text size='small' weight='regular' maxWidth='47rem' align='center' color='#52525B' mb='3.2rem'>Otimize a segurança e efetividade de suas missões com nossa solução avançada de cálculo de rotas e trajetórias.</Text>
            <Button variant='primary' icon={<Next/>}>Começar agora</Button>

        </StyledHome>
    );
};
