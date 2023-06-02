import React from 'react'
import { Container, Top, Bottom, StarIcon, ForkIcon } from './styles'

export function RepoCard({
  login,
  repo_name,
  description,
  language,
  stars,
  forks,
}) {
  const languageClass = language ? language.toLowerCase() : 'other'

  return (
    <Container>
      <Top>
        <a href={`/${login}/${repo_name}`}>{repo_name}</a>
        {/* <p className="repo-description">
          {description}
        </p> */}
      </Top>

      <Bottom>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Bottom>
    </Container>
  )
}