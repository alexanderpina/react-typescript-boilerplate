import { useQuery } from '@tanstack/react-query'

import { getArticlesApi } from '@/domain/articles/'
import { type GetArticleResponse, type GetArticlesProps } from '@/domain/articles/types'

export const cacheArticlesQueries = 'articles'

export const useArticlesQuery = (params: GetArticlesProps) => {
  const {
    data,
    isLoading: isLoadingArticles,
    refetch: refetchArticles,
    isError: isErrorArticles
  } = useQuery<GetArticleResponse>(
    [cacheArticlesQueries, { params }],
    async () => await getArticlesApi(params),
    {
      retry: 2
    }
  )

  const { results: articles, totalResults, status } = data ?? {}

  return {
    articles,
    isLoadingArticles,
    refetchArticles,
    isErrorArticles,
    totalResults,
    status
  }
}
