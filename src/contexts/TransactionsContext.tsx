import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios.ts'

export interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface CreateTransactionInput {
    description: string
    price: number
    category: string
    type: 'income' | 'outcome'
}

interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({

} as TransactionContextType)

interface TransactionsProviderProps {
    children: ReactNode
}



export function TransactionsProvider ({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string) {
        const response = await api.get('transactions', {
            params: {
                _sort: 'id',
                _order: 'desc',
                q: query
            }
        })

        setTransactions(response.data)
    }

    async function createTransaction(data: CreateTransactionInput) {
        const { description, price, category, type } = data

        const response = await api.post('transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        })

        setTransactions(state => [response.data, ...state])
    }

    useEffect(() => {
        fetchTransactions()
    }, [])


    return (
        <TransactionsContext.Provider value={
            {
                transactions,
                fetchTransactions,
                createTransaction
            }
        }>
            {children}
        </TransactionsContext.Provider>
    )
}