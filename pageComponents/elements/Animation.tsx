import {keyframes} from "styled-components";

export const FadeIn = keyframes`
    from {
        opacity: 0;
    }
    
    to {
        opacity: 1;
    }
`;

export const FadeOut = keyframes`
    from {
        opacity: 1;
    }
    
    to {
        opacity: 0;
    }
`;

export const FadeTime = "1500ms";

export const PopupFadeTime = "700ms";