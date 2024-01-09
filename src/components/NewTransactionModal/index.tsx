import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles.ts";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export const NewTransactionModal = () => {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>New transaction</Dialog.Title>

                <CloseButton title="Close dialog">
                    <X size={24} />
                </CloseButton>

                <form action="">
                    <input type="text" placeholder="Description" required />
                    <input type="number" placeholder="Price" required />
                    <input type="text" placeholder="Category" required />

                    <TransactionType>
                        <TransactionTypeButton variant="income">
                            <ArrowCircleUp size={24}/>
                            Income
                        </TransactionTypeButton>

                        <TransactionTypeButton variant="outcome">
                            <ArrowCircleDown size={24}/>
                            Outcome
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">
                        Register
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}