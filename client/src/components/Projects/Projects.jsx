import { info } from '../info'

export const Projects = () => {
  return (
    <div>
      {info.experienceInfo.projects.map(
        ({ name, startDate, endDate, description, amount }, index) => {
          return (
            <div
              key={index}
              className="m-2 w-9/12 justify-center bg-opacity-10 p-3 text-xl text-gray-500 backdrop-blur-3xl backdrop-filter duration-500"
            >
              <div className="h-full w-full gap-y-1 bg-opacity-60 p-3 text-black backdrop-blur-3xl backdrop-filter hover:shadow-black">
                <div className=" w-full">
                  <h1 className="flex flex-col gap-y-1">
                    <span className="text-xl font-bold text-blue-whale">
                      Obra{' '}
                    </span>
                    {name}
                  </h1>
                </div>
                <div className=" w-full">
                  <h1 className="flex flex-col gap-y-1">
                    <span className="text-xl font-bold text-blue-whale">
                      Inicio:{' '}
                    </span>
                    {startDate}
                  </h1>
                </div>
                <div className=" w-full">
                  <h1 className="flex flex-col gap-y-1">
                    <span className="text-xl font-bold text-blue-whale">
                      Finalizacion:{' '}
                    </span>
                    {endDate}
                  </h1>
                </div>
                <div className=" w-full">
                  <h1 className="flex flex-col gap-y-1">
                    <span className="text-xl font-bold text-blue-whale">
                      Monto:{' '}
                    </span>
                    {amount}
                  </h1>
                </div>
                <div className=" w-full">
                  <h1 className="flex flex-col gap-y-1">
                    <span className="text-xl font-bold text-blue-whale">
                      Descripcion:{' '}
                    </span>
                    {description}
                  </h1>
                </div>
              </div>
              <hr className="border-gray border shadow-sm shadow-black"></hr>
            </div>
          )
        },
      )}
    </div>
  )
}
