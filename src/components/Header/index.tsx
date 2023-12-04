import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles.ts";

import logoImg from '../../assets/logo.svg'
export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="DT Money logo"/>
                <NewTransactionButton>New transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}