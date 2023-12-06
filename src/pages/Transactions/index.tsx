import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles.ts";

export const Transactions = () => {
    return (
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="40%">Website development</td>
                            <td>
                                <PriceHighlight variant="income">
                                    US$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Sales</td>
                            <td>05/12/2023</td>
                        </tr>
                        <tr>
                            <td width="40%">Hamburger</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    -US$ 29,99
                                </PriceHighlight>
                            </td>
                            <td>Food</td>
                            <td>05/12/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}