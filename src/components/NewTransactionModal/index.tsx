import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content } from "./styles.ts";

export const NewTransactionModal = () => {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>New transaction</Dialog.Title>
                    <form action="">
                        <input type="text" placeholder="Description" required />
                        <input type="number" placeholder="Price" required />
                        <input type="text" placeholder="Category" required />

                        <button type="submit">
                            Register
                        </button>
                    </form>
                <Dialog.Close />
            </Content>
        </Dialog.Portal>
    )
}