import { LinkedInEmbed } from 'react-social-media-embed'

export const SocialMedia = () => {
  return (
    <div className="flex h-full flex-col gap-y-2 rounded-2xl bg-gulf-stream p-5">
      <LinkedInEmbed
        height={570}
        postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
        url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
        width={250}
        className="rounded-2xl border border-white bg-white p-1 opacity-90 shadow-sm shadow-black backdrop-blur-2xl backdrop-filter"
      />
      <LinkedInEmbed
        height={570}
        postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
        url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
        width={250}
        className="rounded-2xl border border-white p-1 opacity-90 shadow-sm shadow-black backdrop-blur-2xl backdrop-filter"
      />
      <LinkedInEmbed
        height={570}
        postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
        url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
        width={250}
        className="rounded-2xl border border-white p-1 opacity-90 shadow-sm shadow-black backdrop-blur-2xl backdrop-filter"
      />
    </div>
  )
}
