import '../styles/globals.css'
import LayoutDevlog from "../pageComponents/LayoutDevlog";
import Layout from "../pageComponents/Layout"
import React from "react";

const getLayout = (asPath) => {
    if (asPath === "/devlog") {
        return LayoutDevlog;
    }

    return Layout;
};

function MyApp({Component, pageProps, router}) {
    const MainLayout = getLayout(router.asPath);

    return (
        <MainLayout>
            <Component {...pageProps} key={router.route}/>
        </MainLayout>
    );
}

export default MyApp;
