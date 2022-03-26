import React from 'react'                                                                           // Import React dependencie
import Tours from './Tours'                                                                         // Import our Tours Component
import data from './Data'                                                                           // Import our database from Data.js

export default function App() {                                                                     // Main App Component

    const [tours, setTours] = React.useState(data)                                                      // tours state, wich contains a array of possible tours

    const RefreshButton = () => {                                                                       // Returns a Refresh Button element
        return <button className='btn' onClick={() => {setTours(data)}} >Refresh</button>  
    }

    const EmptyTourLayout = () => {                                                                     // Returns the emptyLayout element
        return (
            <div className='title'>
                <h2>No tours left, I DONT NEED YOUR MONEY!!! GET OUT!!</h2>
                <RefreshButton />
            </div>
        )
    }

    const TourLayout = () => {                                                                          // Returns the TourLayout Element
        return <Tours tours={tours} setTours={setTours} />
    }

    const TourLayoutHandler = () => {                                                                   // Handles the choice between the TourLayout or EmptyTourLayout
        return (
            tours.length === 0                                                                              // If the tours array got empty, we just refresh it again
                ? <EmptyTourLayout />
                : <TourLayout />
        )
    }

    return (                                                                                            // Returns the App Logics JSX Structure
        <main>
            <TourLayoutHandler />
        </main>
    )
}