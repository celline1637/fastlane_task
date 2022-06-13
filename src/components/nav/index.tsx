import * as S from './style'

const Nav = () => {
  return (
    <S.Nav>
      <S.Wrapper>
        <S.StyledLink href="/">
          <S.Logo>Github Issue</S.Logo>
        </S.StyledLink>
        <S.MenuWrapper>
          <S.Menu>
            <S.StyledLink></S.StyledLink>
          </S.Menu>
          <S.Menu>
            <S.StyledLink></S.StyledLink>
          </S.Menu>
        </S.MenuWrapper>
      </S.Wrapper>
    </S.Nav>
  )
}

export default Nav
