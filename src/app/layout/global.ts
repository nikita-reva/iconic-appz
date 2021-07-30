import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fjalla+One:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Courgette:ital,wght@0,400&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
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
    }
`;
