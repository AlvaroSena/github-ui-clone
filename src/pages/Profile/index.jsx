import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Content } from './styles'
import { ProfileData } from '../../components/ProfileData'
import { Repos } from '../../components/Repos'

export function Profile() {
  const { login } = useParams()
  const [data, setData] = useState()

  console.log(data)

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${login}`),
      fetch(`https://api.github.com/users/${login}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' })
        return
      }

      const user = await userResponse.json()
      const repos = await reposResponse.json()

      const shuffledRepos = repos.sort(() => 0.5 - Math.random())
      const slicedRepos = shuffledRepos.slice(0, 6)

      setData({
        user,
        repos: slicedRepos
      })
    })
  }, [login])

  return (
    <Container>
      <Content>
        <ProfileData 
          login={data.user.login}
          name={data.user.name}
          avatar_url={data.user.avatar_url}
          followers={data.user.followers}
          following={data.user.following}
          company={data.user.company}
          location={data.user.location}
          email={data.user.email}
          blog={data.user.blog}
        />
        <Repos 
          repos={data.repos}
        />
      </Content>
    </Container>
  )
}
