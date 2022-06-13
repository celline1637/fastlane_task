import * as S from './style'

export interface propTypes {
  width: string
  height: string
  position?: boolean
}

export const Skeleton = ({ ...props }: propTypes) => {
  return <S.Skeleton {...props}></S.Skeleton>
}
