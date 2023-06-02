import styled from 'styled-components'
import { FaGithub, FaSearch } from 'react-icons/fa'

export const Container = styled.header`
  width: 100%;
  background: var(--header);
  padding: 11px 1rem;
`

export const Content = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-right: 1rem;

  cursor: pointer;
  &:hover {
    opacity: .8;
  }
`
export const SearchBar = styled.div`
  border: 1px solid var(--gray-light);
  border-radius: 5px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`
export const SearchIcon = styled(FaSearch)`
  fill: var(--gray-light);
  width: 14px;
  height: 14px;
  margin-right: 1rem;
`
export const TextField = styled.input`
  font-size: 14px;
  color: var(--primary);
`


