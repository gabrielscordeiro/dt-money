import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles.ts";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionSchema>

export const NewTransactionModal = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<newTransactionFormInputs>({
        resolver: zodResolver(newTransactionSchema)
    })

    function handleCreateNewTransaction(data: newTransactionFormInputs) {
        console.log(data)
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

                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24}/>
                            Income
                        </TransactionTypeButton>

                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24}/>
                            Outcome
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit" disabled={isSubmitting}>
                        Register
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}