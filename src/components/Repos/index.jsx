import React from 'react'
import { Container, Grid } from './styles'
import { RepoCard } from '../RepoCard'

export function Repos({ repos }) {
  return (
    <Container>
      <p>Random repositories</p>

      <Grid>
        <div>
          {repos.map(repo => {
            return (
              <RepoCard 
                key={repo.name}
                login={repo.owner.login}
                repo_name={repo.name}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                forks={repo.forks}
              />
            )
          })}
        </div>
      </Grid>
    </Container>
  )
}
