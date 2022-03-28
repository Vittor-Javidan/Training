import React from 'react'                                                                           // Import React dependencie
import Tours from './Tours'                                                                         // Import our Tours Component
import data from './Data'                                                                           // Import our database from Data.js

export default function App() {                                                                     // Main App Component

    const [tours, setTours] = React.useState(data)                                                      // tours state, wich contains a array of possible tours

    const RefreshButton = () => (                                                                       // Returns a button with a purpose to fill the tours again with the data
        <button 
            className='btn' 
            onClick={() => {setTours(data)}} 
        >
            Refresh
        </button>  
    )

    const EmptyTourLayout = () => (                                                                     // Returns the Layout state where whe have no More tours avaible
        <div className='title'>
            <h2>No tours left, I DONT NEED YOUR MONEY!!! GET OUT!!</h2>
            <RefreshButton />
        </div>
    )

    const TourLayout = () => (                                                                          // Returns the layout with the avaible tours
        <Tours tours={tours} setTours={setTours} />
    )

    const TourLayoutHandler = () => (                                                                   // Handler reponsible to chose wich layout shouble be render and returns its JSX structure
        tours.length === 0                                                                                  // If the tours array got empty, the layout changes to one wich we can reset the tours
            ? <EmptyTourLayout />
            : <TourLayout />
    )

    return (                                                                                            // Returns the App JSX Structure Logics
        <main>
            <TourLayoutHandler />
        </main>
    )
}