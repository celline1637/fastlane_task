import styled from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => theme.flexSet()};
  width: 100%;
  max-width: 1240px;
  margin: 3rem auto;
  color: ${({ theme }) => theme.colors.grey300};
  &:hover {
    cursor: pointer;
  }
`
