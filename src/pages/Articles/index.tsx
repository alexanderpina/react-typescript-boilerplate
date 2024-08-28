import { useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { ArticleList } from './ArticlesList'

import { type Article } from '@/domain/articles/types'
import { useArticlesQuery } from '@/queries/articles/queries'

export type Filter = { page?: number; search?: string }

export interface ArticleListProps {
  articles: Article[]
}

export const Articles = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500)

  const filter = useMemo<Filter>(
    () => ({
      page: 1,
      search: debouncedSearchTerm?.length ? debouncedSearchTerm : undefined
    }),
    [debouncedSearchTerm]
  )
  const { isLoadingArticles, articles } = useArticlesQuery(filter)

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Enter search term"
          aria-label="Search"
          aria-describedby="button-addon3"
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
      </div>
      <div>{isLoadingArticles ? <div>Loading...</div> : <ArticleList articles={articles ?? []} />}</div>
    </div>
  )
}
