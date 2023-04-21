// @ts-nocheck
import { PageNotFound } from 'components'
import { useRouteError } from 'react-router-dom'

export const Error404 = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <PageNotFound />
    </div>
  )
}
