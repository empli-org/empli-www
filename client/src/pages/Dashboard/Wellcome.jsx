import { Button } from '@/components'
import { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
// import { apiUrl } from 'utils/utils'
// import { imgProfile } from "utils/utils"

export const Welcome = () => {
  //   const [profile, setProfile] = useState(null)
  const { user, isLoaded } = useUser()

  console.log(user)
  useEffect(() => {
    // const profileImg = localStorage.getItem('profile_picture')
    // setProfile(apiUrl + profileImg)
  }, [])

  return (
    <>
      <div className="flex my-4">
        <div className="flex flex-row m-3 justify-around items-center">
          <img
            src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
            className="w-70 h-70"
            alt=""
          ></img>

          <div className="flex flex-col">
            <h1 className="font-[36px]">
              Bienvenido, {localStorage.getItem('first_name')}
            </h1>
            <div className="flex flex-row">
              {/* <Notifications /> */}
              <h4 className="text-gray-400 font-[14px]">h4Notificaciones x</h4>
            </div>
          </div>
        </div>

        <Button title="Perfil" color="blue-whale" />
      </div>
    </>
  )
}
