export const Podcast = ({ linkShare }) => {
  
  return (
    <div>
      <iframe
        title="#01"
        src={linkShare}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}
