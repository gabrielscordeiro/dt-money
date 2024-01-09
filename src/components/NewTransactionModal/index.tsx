import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton } from "./styles.ts";
import { X } from "phosphor-react";

export const NewTransactionModal = () => {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <CloseButton title="Close dialog">
                    <X size={24} />
                </CloseButton>
                <Dialog.Title>New transaction</Dialog.Title>
                    <form action="">
                        <input type="text" placeholder="Description" required />
                        <input type="number" placeholder="Price" required />
                        <input type="text" placeholder="Category" required />

                        <button type="submit">
                            Register
                        </button>
                    </form>
            </Content>
        </Dialog.Portal>
    )
}