import '../styles/globals.css'
import LayoutDevlog from "../pageComponents/LayoutDevlog";
import Layout from "../pageComponents/Layout"
import React, {useEffect} from "react";

const getLayout = (asPath) => {
    if (asPath.startsWith("/devlog") || asPath.startsWith("/posts")) {
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
