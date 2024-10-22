import styled from "styled-components"

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: black;
    max-width: 220px;
    height: 44px;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.4s background ease-in;

    &:hover {
        background-color: #383838;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    color: black;
    background-color: transparent;

    &:hover {
        background-color: black;
        color: white;
        transition: 0.3s background ease-in;
    }
`;