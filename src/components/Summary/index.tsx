import { SummaryCard, SummaryContainer } from "./styles.ts";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export const Summary = () => {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Input</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>

                <strong>US$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Output</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>US$ 17.400,00</strong>
            </SummaryCard>


            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>US$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}