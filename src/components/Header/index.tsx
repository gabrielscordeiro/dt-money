import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles.ts";

import logoImg from '../../assets/logo.svg'
import * as Dialog from "@radix-ui/react-dialog";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="DT Money logo"/>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>New transaction</NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay />

                        <Dialog.Content>
                            <Dialog.Title>New transaction</Dialog.Title>

                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}