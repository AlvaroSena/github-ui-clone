import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;


  @media (min-width: 768px) {
    flex-direction: row;
  }
`
