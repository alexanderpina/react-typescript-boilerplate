import { useTranslation } from 'react-i18next'

export const T = ({ path }: { path: string }) => {
  const { t } = useTranslation()

  return <>{t(path)}</>
}
