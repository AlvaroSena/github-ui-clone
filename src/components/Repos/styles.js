import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  p {
    color: var(--black);
    margin: 1rem 0;
  }
`

export const Grid = styled.div`
  div {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
  
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }

`