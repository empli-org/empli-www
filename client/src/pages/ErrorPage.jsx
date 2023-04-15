// @ts-nocheck
import { PageNOtFound } from '@/components/PageNotFound/PageNotFound'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      {/* <h1>Oops!</h1> */}
      {/* <p>Sorry, an unexpected error has occurred.</p> */}
      <PageNOtFound />
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  )
}
