import styled from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => theme.flexColumnSet()};
`
export const H1 = styled.h1`
  display: none;
`

export const List = styled.ol`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.grey100};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
`
export const Header = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  gap: 0.4rem;
  padding: 1rem;
`

export const Item = styled.li`
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
`

export const Select = styled.select`
  font-size: 1rem;
  font-weight: 700;
  color: gray;
  background-color: transparent;
  border: none;

  & > option[value=''][disabled] {
    display: none;
  }
`

export const Skeleton = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-start', 'flex-start')};
  width: 100%;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
`
