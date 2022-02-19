import data from "../data"

export default function Card() {

   const cards = data.map(card => {

      let badgeText
      card.openSpots === 0
         ? badgeText = `SOLD OUT`
         : badgeText = `Open spots: ${card.openSpots}`

      return (

         <div key={card.id} className="card">
            <div className="card--badge">{badgeText}</div>
            <img src={card.coverImg} className="card--image" alt="" />
            <div className="card--stats">
               <img className="card--star-icon" src="images/star.png" alt="" />
               <span>{card.stats.rating}</span>
               <span className="gray">({card.stats.reviewCount}) • </span>
               <span className="gray">{card.location}</span>
            </div>
            <p className="card--title">{card.title}</p>
            <p className="card--price"><span className="bold">From ${card.price}</span> / person</p>
         </div>
      )
   })

   return (
      <div className="cards--list">
         {cards}
      </div>
   )
}