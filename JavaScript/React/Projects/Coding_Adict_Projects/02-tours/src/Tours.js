import React from "react"                                                           // Import React dependencie
import Tour from "./Tour"                                                           // Import our Component Tour

export default function Tours({tours, setTours}) {                                  // Component responsible to organize the Tour structure

    const Title = () => (                                                               // Returns the title JSX structure
        <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
        </div>
    )

    const TourComponents = () => (                                                      // Returns a Tour component for each tour avaible inside the tour state
        tours.map(tour => (                                                                 // Maps through tour state to give each tour its own Tour Component
            <Tour key={tour.id} {...tour} setTours={setTours} />
        ))
    )

    return (                                                                            // Returns the Tours JSX Structure Logics
        <section>
            <Title />
            <div>
                <TourComponents />
            </div>
        </section>
    )
}