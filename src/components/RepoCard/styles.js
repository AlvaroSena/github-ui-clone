import styled, { css } from 'styled-components'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
 
export const Container = styled.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 6px;
`

export const Top = styled.div`
  a {
    font-size: 14px;
    font-weight: 600;
    color: var(--link);

    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }

  .repo-description {
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;
  }
`

export const Bottom = styled.div`
  ul {
    display: flex;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      margin-right: 1rem;

      span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.other {
      background: var(--typescript)
    }

    &.javascript {
      background: var(--javascript)
    }

    &.typescript {
      background: var(--typescript)
    }

    &.python {
      background: var(--python)
    }

    &.html {
      background: var(--html)
    }
  }
`

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`

export const StarIcon = styled(AiOutlineStar)`
  ${iconCSS}
`

export const ForkIcon = styled(BiGitRepoForked)`
  ${iconCSS}
`


