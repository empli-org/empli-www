import { IconStar } from '../CardProfile/IconsProfile'
export const Tags = ({ skills }) => {
  return (
    <>
      <div className="flex w-full flex-wrap">
        {skills.map((tag, index) => {
          return (
            <div key={index}>
              <div className="flex w-full justify-around gap-x-px">
                <div className="m-3 flex items-center justify-stretch rounded-bl-full rounded-tl-full rounded-tr-full bg-blue-200 p-2 shadow-sm shadow-gray-900 hover:shadow-white">
                  <div className="mr-2">
                    <IconStar />
                  </div>
                  {tag}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
