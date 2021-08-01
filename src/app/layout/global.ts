import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --iconic-red: #c65647;
        --iconic-pink: #d96459;
        --iconic-blue: #227da1;
        --iconic-darkblue: #1e3b44;
        --iconic-lightblue: #2da4d3;
        --iconic-paleblue: #70bcdb;
        --iconic-lightgreen: #1eba90;
        --iconic-darkgreen: #1aa17d;
        --iconic-turquoise: #1eba90;
        --iconic-yellow: #e2a440;
        --iconic-orange: #f07637;
        --iconic-darkorange: #d46442;
        --iconic-lightorange: #fa9739;
    }

    body {
        background: var(--iconic-blue);
        overflow-x: hidden;
        position: relative;
    }
`;
