import styled, { css } from 'styled-components/macro'

export const Skeleton = styled.div<{
  width?: string
  height?: string
  position?: boolean
}>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '100%')};
  min-width: 2rem;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.grey200};
  ${({ position }) =>
    position &&
    css`
      position: absolute;
      width: 100%;
      height: 100%;
    `};
  & + & {
    margin-top: 0.4rem;
  }
  animation: fade_in_out 2.5s ease-in-out 1.5s infinite;
  @keyframes fade_in_out {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`
