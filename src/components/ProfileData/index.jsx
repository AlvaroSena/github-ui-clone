import React from 'react'
import { 
  Container,
  Content,
  Flex,
  Avatar,
  Column,
  LocationIcon,
  EmailIcon,
  LinkedinIcon,
  List,
  FollowersIcon,
} from './styles'

export function ProfileData({
  login,
  name,
  avatar_url,
  followers,
  following,
  company,
  location,
  linkedin,
  email, 
  blog,
}) {
  return (
    <Container>
      <Content>
        <Flex>
          <Avatar src={avatar_url}/>
          <Column>
            <div>
              <h2>{name}</h2>
              <h3>{login}</h3>
            </div>
          </Column>
        </Flex>

        <List>
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>

          {email && (
            <li>
              <EmailIcon />
              <a href="">{email}</a>
            </li>
          )}

          {linkedin && (
            <li>
              <LinkedinIcon />
              <a href="">in/alvarosen4</a>
            </li>
          )}

          <li>
            <FollowersIcon />
            <span className="span-gray-light"><b>{followers}</b> followers</span>
            <span className="dot">
              ·
            </span>
            <span className="span-gray-light"><b>{following}</b> following</span>
          </li>
        </List>
      </Content>
    </Container>
  )
}
