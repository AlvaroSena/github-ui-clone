import styled, { css } from 'styled-components'
import { FaSearch } from 'react-icons/fa'

export const Overlay = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;

  background: rgb(0 0 0 / 0.5);

  &.false {
    display: none;
  }
`

export const Dialog = styled.dialog`
  background: var(--primary);
  width: 80%;
  max-height: 80vh;
  margin: 0 auto;
  padding: 1rem;

  border-radius: 0.5rem;
  color: var(--black);
  position: absolute;
  z-index: 1040 !important;
  top: 0;
`

export const Form = styled.form``

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid var(--blue);
  min-height: 32px;
  padding: 10px;
  border-radius: 0.5rem;

`

export const SearchIcon = styled(FaSearch)`
  color: var(--gray-light);
  margin-right: 0.5rem;
`

export const TextField = styled.input`
  width: 100%;
  font-size: 14px;
`


