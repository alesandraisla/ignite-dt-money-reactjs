import styled from 'styled-components'
//criar component estilizado, letra maiuscula pq é component

const Title = styled.h1 `
  color: purple;
  button { 
    background-color: yellow;
  }
`

export function App() {
  return (
    <div className="App">
      <Title>Hello World
        <button>Salvar</button>
      </Title>
    </div>
  );
}

