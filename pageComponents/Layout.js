import {useRouter} from "next/router";
import React from "react";
import Transition from "./Transition";

const Layout =
({
     children
}) => {

    const router = useRouter();

    return (
            <Transition
                location={router.pathname}
            >
                {children}
            </Transition>
    );
}

export default Layout;