import { 
  Container, 
  Content, 
  GithubLogo, 
  SearchBar,
  SearchIcon,
  TextField,
} from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <GithubLogo />

        <SearchBar>
          <SearchIcon />
          <TextField placeholder="Search or jump to..." />
        </SearchBar>
      </Content>
    </Container>
  )
}