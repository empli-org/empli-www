import React, { useState } from 'react'
import { plansData } from '@/constants/plansData'
import { accountTypes } from '@/constants/accountTypes'
import { AppContext } from './AppContext'

export function AppContextProvider({ children }) {
  const [accountType, setAccountType] = useState(accountTypes[0])
  const [selectedPlan, setSelectedPlan] = useState(plansData[0])
  const [billing, setBilling] = useState('monthly')
  const [companyInfo, setCompanyInfo] = useState({})
  const [professionalInfo, setProfessionalInfo] = useState({})

  const [activeStep, setActiveStep] = useState(1)
  const [direction, setDirection] = useState(0)

  const CalcTotalAmount = () => {
    let totalAmount =
      billing === 'monthly'
        ? selectedPlan.monthlyPrice
        : selectedPlan.yearlyPrice
    return totalAmount
  }

  return (
    <AppContext.Provider
      value={{
        accountType,
        setAccountType,
        selectedPlan,
        setSelectedPlan,
        billing,
        setBilling,
        activeStep,
        setActiveStep,
        CalcTotalAmount,
        direction,
        setDirection,
        companyInfo,
        setCompanyInfo,
        professionalInfo,
        setProfessionalInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
