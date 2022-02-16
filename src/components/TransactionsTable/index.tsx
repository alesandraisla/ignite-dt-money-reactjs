import { Container } from "./styles";

export function TransactionsTable() {
    return(
        <Container> 
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desev</td>
                        <td>16/02/2022</td>
                    </tr>
                    <tr>
                        <td>Internet</td>
                        <td className="withdraw">- R$ 100</td>
                        <td>internet</td>
                        <td>18/02/2022</td>
                    </tr>
                </tbody>


            </table>
        </Container>
    )
}