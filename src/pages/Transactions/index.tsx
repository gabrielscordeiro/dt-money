
import { useContextSelector } from 'use-context-selector'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles.ts'
import { TransactionsContext } from '../../contexts/TransactionsContext.tsx'
import { dateFormatter, priceFormatter } from '../../utils/formatter.ts'


export const Transactions = () => {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })

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
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        ))}

                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}