import styled from "styled-components";


function Rules() {
    return (
        <RulesContainer>
            <h3>How to play dice game</h3>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
                After the dice is clicked, if the selected number is equal to dice number you'll get the same point as
                the rolled dice. If you get wrong guess then 2 points will be deducted.
            </p>
        </RulesContainer>
    );
}

export default Rules;

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;

    h3 {
        font-size: 24px;
    }
    
    p {
        font-size: 16px;
        margin-top: 8px
    }
`;