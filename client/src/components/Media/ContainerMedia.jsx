import { Podcast } from './Podcast'
import { SectionTitle } from '../Section/SectionTitle'
import { TextHeroPod } from './TextHeroPod'
// import { FormPodcast } from './FormPodcast'

export const ContainerMedia = ({ data }) => {
  return (
    <div>
      {/* <FormPodcast /> */}
      <div className="flex justify-between">
        <SectionTitle
          title={null}
          subtitle={null}
          textColor="text-blue-whale"
          imageOnRight={false}
          imgColor={null}
        />
        <TextHeroPod />
      </div>
      <div className="h-full w-full flex flex-wrap bg-hint-of-red bg-opacity-25 rounded-3xl shadow-sm shadow-white">
        {data?.map((track, index) => {
          return (
            <Podcast
              title={track.title}
              key={index}
              url={track.url}
              description={track.description}
              className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6 mx-10"
            />
          )
        })}
      </div>
    </div>
  )
}
