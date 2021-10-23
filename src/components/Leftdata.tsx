import React, { ReactElement, useEffect, useState } from 'react' //importing useeffect and usestate so we can store our json data inside of the state

export default function Leftdata(): ReactElement {
    const [data, setData] = useState<any>([]) //setting our useState to an any type array, because we will have to map the object array

    useEffect(() => { //use effect, this will happen and our fetch will work 
        const URL: string = 'https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=237' //our link that retrieves lebron's 2020 stats in an object array.
        
        const fetchData = async() => { //using an asynchronous fetch call to call our api data
            try { //using the try catch block to catch an error, while also performing our call.
                const response: any = await fetch(URL) //awaiting our url fetch
                const json: any = await response.json() //setting a variable to the json response
                console.log(json) //logging it so we can read what we get
                
                setData(json.data) //setting the array of objects to our state variable
               
            }catch(error){ //catching and alerting when getting an error
                alert(error)
            }
        }
        fetchData() //running our function
    }, [])
    return (
        <div>
             {data.map( (points: any) => ( //performing a map on our state variable so we can access the api data and display it
                <p className="midStyle">Average points per game: {points.pts}</p>     //displaying our points object
            ))}
            {data.map( (points: any) => (
                <p className="midStyle">Average assists per game: {points.ast}</p> //display our assist objects
            ))}
            {data.map( (points: any) => (
                <p className="midStyle"><p id="midStyle">Total games played: {points.games_played}</p></p> //displaying the games played object
            ))}
            {data.map( (points: any) => (
                <p className="midStyle">Per-minute point rating in 36 minutes: {36 * points.pts / 24} </p> //computing the 36 minute average, and displaying it
            ))}
        </div>
    )
}
