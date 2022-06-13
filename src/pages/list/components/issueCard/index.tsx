import { forwardRef } from 'react'
import { Issue } from '../../../../types'
import * as S from './style'

interface propTypes {
  info: Issue
}

export const IssueCard = forwardRef<HTMLDivElement, propTypes>(
  ({ info }, ref) => {
    const {
      title,
      user,
      number,
      created_at,
      labels,
      html_url,
      comments,
      reactions,
    } = info

    const goToList = () => {
      window.open(html_url)
    }

    const formatDate = (date: Date) => {
      return date.toLocaleString().replace('T', ' ').replace('Z', '')
    }

    return (
      <S.Wrapper ref={ref}>
        <S.Checkbox type="checkbox" />
        <S.TextSection>
          <S.TitleSection>
            <S.Title onClick={goToList}>{title}</S.Title>
            {labels.map((el) => (
              <S.Label key={el.id} color={el.color}>
                {el.name.split(':')[0]}
                <S.Tootip disabled={el.name.split(':')[1]}>
                  {el.name.split(':')[1]}
                </S.Tootip>
              </S.Label>
            ))}
          </S.TitleSection>
          <p>{`#${number} opened ${formatDate(created_at)} by ${
            user.login
          }`}</p>
        </S.TextSection>
        <S.CountInfoSection>
          <div>💬 {comments}</div>
          <div>🙌 {reactions.total_count}</div>
        </S.CountInfoSection>
      </S.Wrapper>
    )
  }
)
