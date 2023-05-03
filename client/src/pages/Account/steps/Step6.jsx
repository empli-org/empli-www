import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from 'pages'
import { useClerk } from '@clerk/clerk-react'
import { useAccountContext } from '../AccountContext'
import { useNavigate } from 'react-router-dom'
import {
  useCreateAccountMutation,
  useVerifyAccountMutation,
} from '@/redux/features/api/account/accountApi'

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
  const [ok, setOk] = useState(false)
  const [createAccount, { isLoading: creating, isSuccess: created, error }] =
    useCreateAccountMutation()
  const { accountType, selectedPlan, companyInfo, professionalInfo } =
    useContext(AppContext)
  const [
    verifyUser,
    { data, isLoading: verifying, isSuccess, error: verifyError },
  ] = useVerifyAccountMutation()
  const { user } = useClerk()
  const { setAccount, setAccountType } = useAccountContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (
      !creating &&
      created &&
      !verifying &&
      !isSuccess &&
      !data?.success &&
      !verifyError
    )
      verifyUser({ email: user.primaryEmailAddress.emailAddress })

    if (data) {
      setAccount(data.account)
      setAccountType(accountType.name)
      setOk(true)
    }
  }, [data, creating, created, verifying, verifyError])

  useEffect(() => {
    let ignore = false
    const name =
      accountType.name === 'Professional' ? user.fullName : companyInfo.name
    const body = {
      name,
      plan: selectedPlan.name.toUpperCase(),
      email: user.primaryEmailAddress.emailAddress,
      image: user.profileImageUrl,
      type: accountType.name.toLowerCase(),
      ...(accountType.name === 'Professional'
        ? { career: professionalInfo.career, bio: professionalInfo.bio }
        : { description: companyInfo.description }),
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
        {creating ? (
          <p>Estamos creando/verificando tu cuenta...</p>
        ) : error ? (
          <>{JSON.stringify(error)}</>
        ) : (
          <button
            onClick={() => navigate(`/dashboard`)}
            disabled={!ok}
            className="mt-4 rounded-md bg-blue-whale px-6 py-3 text-white disabled:bg-slate-500"
          >
            Mi cuenta
          </button>
        )}
      </div>
    </div>
  )
}
