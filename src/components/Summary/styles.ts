import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;
  padding: 1.5rem;
  margin-top: -5rem;
`

interface SummaryCardProps {
    variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${props => props.variant === 'green' && css`
    background: ${props.theme['green-700']};
  `}
`