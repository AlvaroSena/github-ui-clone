import styled, { css } from 'styled-components'
import { MdOutlineEmail } from 'react-icons/md'
import { IoLogoLinkedin } from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go' 

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;
  margin-right: 1rem;

  @media (min-width: 768px) {
    width: 300px;
    margin-bottom: 1rem;
  }
`

export const Column = styled.div`
  div {
    h2 {
      color: var(--gray-dark);
      font-size: 26px;
      line-height: 1.25;
      font-weight: 600;
    }

    h3 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
    }
  }
`

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
  margin-right: 6px;
`

export const LocationIcon = styled(GoLocation)`
  ${iconCSS}
`

export const EmailIcon = styled(MdOutlineEmail)`
  ${iconCSS}
`

export const LinkedinIcon = styled(IoLogoLinkedin)`
  ${iconCSS}
`

export const List = styled.ul`
  margin-top: 1rem;

  li {
    display: flex;
    align-items: center;
    font-size: 14px;

    a, span {
      color: var(--black);
    }

    a {
      &:hover {
        text-decoration: underline;
        color: var(--blue);
      }
    }

    .dot {
      margin: 0 4px;
    }

    .span-gray-light {
      color: var(--gray-light);

      b {
        color: var(--black);
      }
    }
  }

  li + li {
    margin-top: 10px;
  }
`

export const FollowersIcon = styled(FiUsers)`
  ${iconCSS}
  fill: none;
  color: var(--icon);
`

