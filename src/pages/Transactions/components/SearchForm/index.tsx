import { SearchFormContainer } from "./styles.ts";
import { MagnifyingGlass } from "phosphor-react";

export const SearchForm = () => {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Search for transactions" />

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Search
            </button>
        </SearchFormContainer>
    )
}