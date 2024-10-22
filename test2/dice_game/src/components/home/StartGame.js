import styled from 'styled-components'
import { Button } from '../../styling/Button';

function StartGame({toggle}) {
    return (
        <Container>
            <div>
                <img src="/images/dices.png" alt="dices" />
            </div>
            <div className="content">
                <h1>Start Game</h1>
                <Button onClick={toggle}>Play Game</Button>
            </div>
        </Container>
    );
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    .content h1 {
        white-space: nowrap;
        font-size: 96px;
    }
`;
