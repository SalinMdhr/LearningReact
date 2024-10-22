import styled from "styled-components";


function NumberSelect({selectedNumber, setSelectedNumber, error, setError}) {

    const arrNumber = [1, 2, 3, 4, 5, 6];

    const errorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

    return (
        <NumberContainer>
            <p className="set_error">{error}</p>
            <div className="dflex">
                {arrNumber.map((value, i) => (
                    <Box key={i} onClick={() => errorHandler(value)} isSelected={value === selectedNumber}>{value}</Box>
                ))}
            </div>
            <p>
                Select Number
            </p>
        </NumberContainer>
    );
}

export default NumberSelect;

const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .set_error {
        color: red;
    }

    .dflex {
        display: flex;
        gap: 24px;
    }
    
    p {
        font-size: 24px;
        font-weight: 700;
    }
`;

const Box = styled.div`
    height: 52px;
    cursor: pointer;
    width: 52px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    wont-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
`;