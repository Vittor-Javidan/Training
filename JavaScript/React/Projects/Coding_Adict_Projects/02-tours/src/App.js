import React from 'react'                                                                           // Import React dependencie
import Tours from './Tours'                                                                         // Import our Tours Component
import data from './Data'                                                                           // Import our database from Data.js

export default function App() {                                                                     // Main App Component

    const [tours, setTours] = React.useState(data)                                                  // tours state, wich contains a array of possible tours

    if(tours.length === 0) {                                                                            // If the tours array got empty, we just refresh it again
        return (
            <main>
                <div className='title'>
                    <h2>No tours left, I DONT NEED YOUR MONEY!!! GET OUT!!</h2>
                    <button className='btn' onClick={() => {setTours(data)}} >Refresh</button>          {/* Button responsiable to trigger the refresh database*/}
                </div>
            </main>
        )

    } else {
        return (
            <main>
                <Tours tours={tours} setTours={setTours} />
            </main>
        )
    }
}