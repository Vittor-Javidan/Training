import { useState } from 'react'                                                // Import useState from react dependencie

export default function Tour({id, name, info, image, price, setTours}) {        // Component responsible to structure each Tour
    
    const [readMore, setReadMore] = useState(false)                                 // state responsible to define if the tour info should be displayed or not

    function deleteTour() {                                                         // Function responsible to trigger a component delete
        setTours(prev => {  
            const newTours = []                                                         // empty new array
            for(let i = 0; i < prev.length; i++)                                        // interates in the previous array, wich contains the Tour elements already constructed
                if (prev[i].id !== id)                                                      // if this id is diferent from the id inside the array
                    newTours.push(prev[i])                                                      // push back every component with different id than the actual one

            return newTours                                                             // set the tours to the new array
        })
    }

    const DeleteButton = ()=> {                                                     // Returns a delete button element
        return (
            <button className="delete-btn" onClick={deleteTour} >
                Not interested, delete this bad trip!!                                                                           
            </button>
        )
    }

    const ReadMoreButton = () => {                                                  // Returns the read more button element
        return (
            <button onClick={() => {setReadMore(!readMore)}}>
                { readMore ? `Show Less` : `Show more` }
            </button>
        )
    }

    const TourText = () => readMore ? info : `${info.substring(0, 100)} ...`        // if readMore is true, show all tour text, if not, it will be hidden partially

    return (                                                                        // Returns the Tour Component JSX Structure Logic
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer >
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}</h4>
                </div>
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