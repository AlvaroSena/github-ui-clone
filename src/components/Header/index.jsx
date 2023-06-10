import React, { useState } from 'react'
import { 
  Container, 
  Content, 
  GithubLogo, 
  SearchBar,
  SearchIcon,
  TextField,
  Link,
} from './styles'

export function Header({ openSearchModal }) {
  return (
    <Container>
      <Content>
        <Link href="/">
          <GithubLogo />
        </Link>
        <SearchBar>
          <SearchIcon />
          <TextField 
            placeholder="Search or jump to..." 
            onClick={openSearchModal} 
          />
        </SearchBar>
      </Content>
    </Container>
  )
}