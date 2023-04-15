// @ts-nocheck
import { PageNOtFound } from '@/components/PageNotFound/PageNotFound'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <PageNOtFound />
    </div>
  )
}
