import styled from "styled-components";
import { Button, OutlineButton } from "../../styling/Button";
import Rules from "./Rules";


function RollDice({showRules, clickedRules, currentDice, rollDice, resetScore}) {
    
    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice${currentDice}.png`} alt="dice" />
            </div>
            <p>Click on the dice to roll</p>
            <div className="btn">
                <Button onClick={resetScore}>Reset Score</Button>
                <OutlineButton onClick={showRules}>Show Rules</OutlineButton>
            </div>
                <>
                    {
                        clickedRules ? <Rules /> : " "
                    }
                </>
        </DiceContainer>
    );
}

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 28px 0 0 0;

    p {
    font-size: 24px;
    }

    .dice {
        max-width: 150px;
        max-height: 150px;
        cursor: pointer;
    }

    .dice img {
        max-width: 150px;
        max-height: 150px;
    }
    
    .btn {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;
