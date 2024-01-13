import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles.ts";
import { SearchForm } from "./components/SearchForm";
import { useEffect, useState } from "react";

interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

export const Transactions = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions()
    }, []);

    return (
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td width="40%">{transaction.description}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                    {transaction.price}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}

                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}