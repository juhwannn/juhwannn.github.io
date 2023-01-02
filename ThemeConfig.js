import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#FFF",
    text: "#363537",
    toogleBorder: "#FFF",
    background: "#363537",
};

export const darkTheme = {
    body: "#363537",
    text: "#FAFAFA",
    toogleBorder: "6B8096",
    background: "#fff",
};

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
`;
