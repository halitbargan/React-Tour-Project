import "./Cards.scss"

const Cards = ({veri}) => {
  return (
    <div>
      {
      veri.map((item) => {
        const { id, desc, title, image } = item;
        return (
          <div className="cards">
            <p>{title}</p>
            <img src={image} alt=""/>
            <p>{desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Cards