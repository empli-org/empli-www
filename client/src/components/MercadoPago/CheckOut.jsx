import { useGetPlanQuery } from '@/redux/features/api/plan/planApi'
import { useState } from 'react'

export const CheckOut = () => {
  /* 

 */
  const { data = [] } = useGetPlanQuery()
  console.log(data)
  //   const [typePlan, setTypePlan] = useState(null)

  return <></>
}
