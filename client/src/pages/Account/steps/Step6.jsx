import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  useCreateAccountMutation,
  useVerifyAccountMutation,
} from '@/redux/features/api/base'
import { AppContext } from '../OnboardingContext'
import { useClerk } from '@clerk/clerk-react'
import { useAccountContext } from '../AccountContext'

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
}
export const Step6 = () => {
  const [createAccount, { isLoading, error }] = useCreateAccountMutation()
  const { accountType, selectedPlan } = useContext(AppContext)
  const [verifyUser, { data }] = useVerifyAccountMutation()
  const { user } = useClerk()
  const { setAccount, setAccountType } = useAccountContext()

  useEffect(() => {
    if (!isLoading && !error)
      verifyUser({ email: user.primaryEmailAddress.emailAddress })

    if (data) {
      setAccount(data.account)
      setAccountType(accountType.name)
    }
  }, [data, isLoading])

  useEffect(() => {
    let ignore = false
    const body = {
      name: user.fullName,
      plan: selectedPlan.name.toUpperCase(),
      email: user.primaryEmailAddress.emailAddress,
      image: user.profileImageUrl,
      type: accountType.name.toLowerCase(),
    }
    if (!ignore) {
      createAccount(body)
    }
    return () => {
      ignore = true
    }
  }, [])

  return (
    <div className="rounded-lg bg-white px-8 py-12 shadow-lg">
      <div className="flex flex-col items-center justify-center gap-3">
        <motion.h4 variants={childVariants} className="text-xl font-bold">
          Te damos la bienvenida a nuestra plataforma!
        </motion.h4>
        <motion.p
          variants={childVariants}
          className="text-center text-slate-600"
        >
          Gracias por confiar en nosotros! Estamos felices de que utilices
          nuestra plataforma. Si necesitas soporte, estamos disponibles para que
          nos contactes mediante <b>support@empli.com</b>.
        </motion.p>
        {isLoading ? (
          <p>Estamos creando tu cuenta...</p>
        ) : error ? (
          <>{JSON.stringify(error)}</>
        ) : (
          <Link
            to="/dashboard"
            className="mt-4 rounded-md bg-blue-whale px-6 py-3 text-white"
          >
            Mi cuenta
          </Link>
        )}
      </div>
    </div>
  )
}
