import { useState } from 'react'                                                // Import useState from react dependencie

export default function Tour({id, name, info, image, price, setTours}) {        // Component responsible to structure each Tour
    
    const [readMore, setReadMore] = useState(false)                                 // state responsible to define if the tour info should be displayed or not

    const TourImage = () => (                                                       // Returns the JSX img structure
        <img src={image} alt={name} />
    )

    const TourInfo = () => (                                                        // Returns the Tour info JSX structure
        <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
        </div>
    )

    const TourText = () => (                                                        // Returns the tour string text, based on readMore state
        readMore 
            ? info 
            : `${info.substring(0, 100)} ...`
    )        

    const ReadMoreButton = () => (                                                  // Returns a JSX button responsible to toggle readMore state
        <button onClick={() => {setReadMore(!readMore)}}>
            { readMore ? `Show Less` : `Show more` }
        </button>
    )

    const DeleteButton = () => (                                                    // Returns a JSX button responsible to delete the tour inside the tour state, wich corresponds to the tour where it belongs
        <button 
            className="delete-btn" 
            onClick={() => {setTours(prev => prev.filter(tour => tour.id !== id))}} 
        >
            Not interested, delete this bad trip!!                                                                           
        </button>
    )

    return (                                                                        // Returns the Tour JSX Structure Logics
        <article className="single-tour">
            <TourImage />
            <footer >
                <TourInfo />
                <div>
                    <p>
                        <TourText />
                        <ReadMoreButton />
                    </p>
                    <DeleteButton />
                </div>
            </footer>
        </article>
    )
}