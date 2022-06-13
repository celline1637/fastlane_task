import { Skeleton } from '../../components'
import { useIssueList, useIntersectionObserver } from '../../hooks'
import { IssueCard } from './components/issueCard'
import * as S from './style'

export const ListScreen = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useIssueList()

  const observeElement = () => {
    if (!hasNextPage) return
    fetchNextPage()
  }

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (entry.isIntersecting) {
      observeElement()
      observer.observe(entry.target)
    }
  }

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    onIntersect,
  })

  const list = data?.pages.map((page) => page.items).flat()

  if (isError) alert('목록을 불러오지 못하였습니다.')

  return (
    <S.Wrapper>
      <S.H1>Issues List</S.H1>
      <S.List>
        <S.Header>
          <input type="checkbox" />
          <S.Select name="sort">
            <option value="" disabled>
              Sort
            </option>
            <option value="comment">comment</option>
            <option value="created">created</option>
          </S.Select>
        </S.Header>
        {list?.map((el, i) => (
          <S.Item key={el.id}>
            <IssueCard
              key={el.id}
              ref={list?.length === i + 1 ? setTarget : null}
              info={el}
            />
          </S.Item>
        ))}
        {isLoading &&
          [...Array(10)].map((_) => (
            <S.Skeleton>
              <Skeleton width="50%" height="1.2rem" />
              <Skeleton width="30%" height="1.2rem" />
            </S.Skeleton>
          ))}
      </S.List>
    </S.Wrapper>
  )
}
