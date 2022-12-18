import '../styles/globals.css'
import LayoutDevlog from "../pageComponents/LayoutDevlog";
import Layout from "../pageComponents/Layout"
import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "../ThemeConfig";

const getLayout = (asPath) => {
    if (asPath.startsWith("/devlog") || asPath.startsWith("/posts")) {
        return LayoutDevlog;
    }

    return Layout;
};

function MyApp({Component, pageProps, router}) {
    const [theme, setTheme] = useState("dark");
    const MainLayout = getLayout(router.asPath);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme: darkTheme}>
            <GlobalStyles/>
            <MainLayout theme={theme} setTheme={setTheme}>
                <Component {...pageProps} key={router.route}/>
            </MainLayout>
        </ThemeProvider>
    );
}

export default MyApp;
