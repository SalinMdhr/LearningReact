import styled from "styled-components";
import NumberSelect from "./NumberSelect";
import Score from "./Score";
import RollDice from "./RollDice";
import { useState } from "react";


function GamePlay() {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [clickedRules, setClickedRules] = useState(false);

    const generateNumber = (min, max) => {
        return (Math.floor(Math.random() * (min, max) + min));
    }

    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number!!");
            return;
        }
        const randomNumber = generateNumber(1, 6);
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    }

    const showRules = () => {
        setClickedRules((prev) => !prev);
    }

    return (
        <MainContainer>
            <div className="top_section">
                <Score score={score}/>
                <NumberSelect selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
            </div>
            <RollDice showRules={showRules} clickedRules={clickedRules} resetScore={resetScore} currentDice={currentDice} rollDice={rollDice}/>
        </MainContainer>
    );
}

export default GamePlay;

const MainContainer = styled.main`
    .top_section {
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin: 10px 30px 10px 30px;
    }
`;