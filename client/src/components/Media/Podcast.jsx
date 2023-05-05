export const Podcast = ({ url, title, description, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <iframe
        title="#01"
        src={url}
        width="100%"
        height="300"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen={true}
        loading="eager"
      ></iframe>
    </div>
  )
}
