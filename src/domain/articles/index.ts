import { EXTERNAL_API } from '../api'
import { type GetArticleResponse, type GetArticlesProps } from './types'

export const getArticlesApi = async (params: GetArticlesProps): Promise<GetArticleResponse> => {
  const { search } = params
  const url = `https://newsdata.io/api/1/latest?apikey=pub_47658571698fb41f8ce5cbcbe53ed8ab2e75b${
    search ? `&q=${search}` : ''
  }`

  const { data, status } = await EXTERNAL_API.get<GetArticleResponse>(url)

  if (![200, 201, 204].includes(status)) {
    console.error('Error fetching articles')
    return { status: data?.status }
  }

  return data
}
