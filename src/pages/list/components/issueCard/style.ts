import styled from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'flex-start')};
  gap: 0.5rem;
  padding: 1rem;
`

export const Checkbox = styled.input`
  margin-top: 0.3rem;
`

export const TextSection = styled.div`
  width: 88%;
  font-size: 1rem;
  font-weight: 600;

  & > p:last-of-type {
    margin-top: 0.6rem;
    color: ${({ theme }) => theme.colors.grey300};
    font-size: 0.8rem;
    font-weight: 400;
  }
`

export const TitleSection = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  flex-wrap: wrap;
  gap: 0.3rem;
`

export const Title = styled.div`
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`

export const Label = styled.div<{ color: string; desc?: string }>`
  position: relative;
  padding: 0.3rem;
  border-radius: 25px;
  background-color: ${({ color }) => `#${color}`};
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
  }

  & > span {
    display: none;
  }

  &:hover > span {
    display: inherit;
  }
`

export const Tootip = styled.span<{ disabled: boolean }>`
  ${({ theme }) => theme.posCenterX()};
  bottom: -140%;
  width: max-content;
  padding: 0.3rem;
  z-index: 99;
  border-radius: 8px;
  background-color: black;
  display: ${({ disabled }) => !disabled && 'none'} !important;

  &::after {
    border-bottom: 8px solid black;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    content: '';
    height: 0;
    ${({ theme }) => theme.posCenterX()};
    top: -25%;
    width: 0;
  }
`

export const CountInfoSection = styled.div`
  ${({ theme }) => theme.flexSet('space-around')};
  gap: 0.4rem;
  width: 10%;
  margin-left: auto;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.grey300};
`
