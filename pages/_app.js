import '../styles/globals.css'
import LayoutDevlog from "../pageComponents/LayoutDevlog";
import Layout from "../pageComponents/Layout"
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "../ThemeConfig";
import { FiMoon } from "react-icons/Fi";
import { BsSun } from "react-icons/Bs";

const DarkMode = styled.div`
    position: fixed;
    bottom: 5vh;
    right: 5vw;
    width: 3vw;
    text-align: center;
    border-radius: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    
    background: ${props => props.theme === "light" ? lightTheme.background : darkTheme.background};
    color: ${props => props.theme === "dark" ? lightTheme.text : darkTheme.text};
`;

const getLayout = (asPath) => {
    if (asPath.startsWith("/devlog") || asPath.startsWith("/posts")) {
        return LayoutDevlog;
    }

    return Layout;
};

const toggleTheme = (theme, setTheme) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light" ? window.localStorage.setItem("theme","dark") : window.localStorage.setItem("theme", "light");
};

function MyApp({Component, pageProps, router}) {
    const [theme, setTheme] = useState("dark");
    const MainLayout = getLayout(router.asPath);

    useEffect(() => {
        setTheme(window.localStorage.getItem("theme") ? window.localStorage.getItem("theme") : "dark");
    }, []);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme: darkTheme}>
            <GlobalStyles/>
            <MainLayout>
                <Component {...pageProps} key={router.route}/>
            </MainLayout>
            <DarkMode onClick={e => toggleTheme(theme, setTheme)} theme={theme}>
                {
                    theme === "light" ? <FiMoon size="25"/> : <BsSun size="25"/>
                }
            </DarkMode>
        </ThemeProvider>
    );
}

export default MyApp;
