import React from 'react'
import * as S from './style'

export const Footer = () => {
  const handleClick = () => {
    window.open('https://github.com/celline1637')
  }

  return <S.Wrapper onClick={handleClick}>Published by Sunkyung</S.Wrapper>
}
