import {
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group";

import React from "react";
const TIMEOUT = 800;

const getTransitionStyles = {
    entering: {
        position: `absolute`,
        opacity: 0,
        transform: `translateY(100px)`,
    },
    entered: {
        transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
        opacity: 1,
        transform: `translateY(0px)`,
    },
    exiting: {
        transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
        opacity: 0,
        transform: `translateY(-100px)`,
    },
};

const Transition = ({ children, location }) => {
    const nodeRef = React.useRef(null)

    return (
        <TransitionGroup style={{ position: "relative" }}>
            <ReactTransition
                key={location}
                timeout={{
                    enter: TIMEOUT,
                    exit: TIMEOUT,
                }}
                nodeRef={nodeRef}
            >
                {status => (
                    <div
                        style={{
                            ...getTransitionStyles[status],
                        }}
                    >
                        {children}
                    </div>
                )}
            </ReactTransition>
        </TransitionGroup>
    )
};

export default Transition;