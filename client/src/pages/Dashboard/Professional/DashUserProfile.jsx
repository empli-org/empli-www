import { CardProfile } from '@/components'
import { UserProfileForm } from '@/components/Forms/UserForms/UserProfileForm'
import { useAccountContext } from '@/pages/Account/AccountContext'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const DashUserProfile = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [enabled, setEnabled] = useState(false)
  const isEdit = searchParams.get('edit') === 'true'
  const { account } = useAccountContext()

  useEffect(() => {
    setSearchParams({ edit: enabled })
  }, [enabled])

  return (
    <div>
      <div className="flex items-center justify-center gap-4 px-4 py-8">
        <button
          onClick={() => setEnabled(false)}
          className={clsx(!isEdit && 'font-bold underline')}
        >
          Previa
        </button>
        <button
          onClick={() => setEnabled(true)}
          className={clsx(isEdit && 'font-bold underline')}
        >
          Editar
        </button>
      </div>
      {isEdit ? (
        <UserProfileForm />
      ) : (
        <div className="flex items-center justify-center py-6">
          <CardProfile info={account} />
        </div>
      )}
    </div>
  )
}
