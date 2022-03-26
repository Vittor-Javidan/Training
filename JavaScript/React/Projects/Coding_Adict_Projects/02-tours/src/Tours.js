import React from "react"                                                           // Import React dependencie
import Tour from "./Tour"                                                           // Import our Component Tour

export default function Tours({tours, setTours}) {                                  // Component responsible to organize the Tour structure

    const TourComponents = () => {
        return tours.map(tour => {                                                      // Maps through tours array and returns a Tour Component for each element inside it
            return <Tour key={tour.id} {...tour} setTours={setTours} />
        })
    }

    return (                                                                            // Returns the Tours Component JSX Structure Logics
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                <TourComponents />
            </div>
        </section>
    )
}