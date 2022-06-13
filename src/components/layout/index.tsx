import { Outlet } from 'react-router-dom'
import { Footer } from '../footer'
import Nav from '../nav'
import * as S from './style'

export const Layout = () => {
  return (
    <>
      <Nav />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
      <Footer />
    </>
  )
}
