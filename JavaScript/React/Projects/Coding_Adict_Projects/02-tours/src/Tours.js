import React from "react"                                                           // Import React dependencie
import Tour from "./Tour"                                                           // Import our Component Tour

export default function Tours({tours, setTours}) {                                  // Component responsible to organize the Tour structure

    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {
                    tours.map(tour => {                                                 // Maps through tours array and returns a Tour Component for each element inside it
                        return <Tour key={tour.id} {...tour} setTours={setTours} />
                    })
                }
            </div>
        </section>
    )
}