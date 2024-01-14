import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles.ts'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext.tsx'

const newTransactionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionSchema>

export const NewTransactionModal = () => {

    const { createTransaction } = useContext(TransactionsContext)

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<newTransactionFormInputs>({
        resolver: zodResolver(newTransactionSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: newTransactionFormInputs) {
        const { description, price, category, type } = data

        await createTransaction({
            description,
            price,
            category,
            type
        })


        reset()
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <CloseButton title="Close dialog">
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Description"
                        required
                        {...register('description')}
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        required
                        {...register('price', { valueAsNumber: true })}
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24}/>
                                        Income
                                    </TransactionTypeButton>

                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24}/>
                                        Outcome
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Register
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}