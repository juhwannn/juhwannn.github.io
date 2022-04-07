import '../styles/globals.css'
import Layout from "../pageComponents/Layout";
import React from "react";

function MyApp({Component, pageProps, router}) {
    return (
        <Layout>
            <Component {...pageProps} key={router.route}/>
        </Layout>
    );
}

export default MyApp
