import '../styles/globals.css'
import Layout from "../pageComponents/Layout";
import React from "react";

function MyApp({Component, pageProps, router}) {
    return (
        <Component {...pageProps} key={router.route}/>
    );
}

export default MyApp
