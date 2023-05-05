import { CardProfile } from 'components'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Switch } from '@headlessui/react'
import { UserProfileForm } from './UserProfileForm'

export default function UserProfile() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [enabled, setEnabled] = useState(false)
  const isEdit = searchParams.get('edit') === 'true'

  useEffect(() => {
    setSearchParams({ edit: enabled })
  }, [enabled])

  return (
    <>
      <div>
        <div className="flex items-center justify-center py-8">
          <Switch.Group>
            <div className="flex items-center gap-4">
              <Switch.Label className="text-lg font-medium">
                {enabled ? 'Ver perfil' : 'Editar'}
              </Switch.Label>

              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-blue-whale' : 'bg-blue-whale'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Editar perfil</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </Switch.Group>
        </div>
        {isEdit ? (
          <UserProfileForm />
        ) : (
          <div className="flex items-center justify-center py-6">
            <CardProfile />
          </div>
        )}
      </div>
    </>
  )
}
