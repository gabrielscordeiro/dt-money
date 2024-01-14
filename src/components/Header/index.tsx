import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles.ts'

import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="DT Money logo"/>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>New transaction</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}