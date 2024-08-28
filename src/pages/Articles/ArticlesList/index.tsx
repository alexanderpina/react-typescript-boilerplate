import { formatDate } from 'utils/helper'

import { type Article } from '@/domain/articles/types'

export type Filter = { page?: number; search?: string }

export interface ArticleListProps {
  articles: Article[]
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  if (!articles?.length) {
    return <div>No articles found</div>
  }

  return (
    <>
      {articles.map((article) => (
        <div key={article.link}>
          <article>
            <a href={article.link} target="_blank" rel="noreferrer">
              {article.image_url ? (
                <img alt="Placeholder" src={article.image_url} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
            </a>

            <header>
              <h1>
                <a href={article.link} target="_blank" rel="noreferrer">
                  {article.title}
                </a>
              </h1>
              <p>{formatDate(article.pubDate)}</p>
            </header>

            <footer>
              <a href="#">
                <img alt="Placeholder" src="https://picsum.photos/32/32/?random" />
                <p>Author Name</p>
              </a>
              <a href="#">
                <span>Like</span>
                <i />
              </a>
            </footer>
          </article>
        </div>
      ))}
    </>
  )
}
