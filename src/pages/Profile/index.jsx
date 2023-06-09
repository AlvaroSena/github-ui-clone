import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Content } from './styles'
import { ProfileData } from '../../components/ProfileData'
import { Repos } from '../../components/Repos'
import { SearchModal } from '../../components/SearchModal'
import { Helmet } from 'react-helmet'

export function Profile({ isOpenSearchModal, openSearchModal, closeSearchModal }) {
  const { login = 'alvarosena' } = useParams()
  const [data, setData] = useState()

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${login}`),
      fetch(`https://api.github.com/users/${login}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses

      if (userResponse.status !== 200) {
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

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <Helmet>
        <title>{`${data.user.login} (${data.user.name})`}</title>
      </Helmet>
      <SearchModal 
        isOpen={isOpenSearchModal}
        openModal={openSearchModal}
        closeModal={closeSearchModal}
      />

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
