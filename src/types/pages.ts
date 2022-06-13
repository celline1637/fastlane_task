import { Issue } from './issue'

export interface Pages {
  items: Issue[]
  nextPage: number
  hasMore: boolean
}
