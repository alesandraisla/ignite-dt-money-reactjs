import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

//font-size: 16px padrão desktop
html { 
    @media (max-width:1080px) {
        font-size: 93.75%; //15px
    }
    @media (max-width:720px) {
        font-size: 875%;
    }
}

// REM = 1rem = font-size 16px 
//Boa prática utilizar ele bt img logo icons 
//se adaptando a cada tela do usuoario
//percentual vai aumentar e diminuir de acordo com a preferencia do usuario


    body { 
        background: var(--background);
        -webkit-font-smoothing: antialiased; // font nítida 
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`