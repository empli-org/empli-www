export const InfoCard = ({ image, title, description }) => {
  return (
    <>
      <div className="flex">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}
