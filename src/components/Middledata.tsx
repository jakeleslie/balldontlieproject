import React, { ReactElement, useEffect, useState } from 'react' //importing our nessacary things.

export default function Middledata(): ReactElement {
    const [home, setHome] = useState<string>("") //creating all of our state variables
    const [visitor, setVisitor] = useState<string>("")
    const [homeScore, setHScore] = useState<string>("")
    const [visitorScore, setVScore] = useState<string>("")
    const [diff, setDiff] = useState<string>("")
    const [winner, setWinner] = useState<string>("")
    
    let randomVal: number = Math.random() * (25 - 1) + 1
    let rv: string = randomVal.toString() //making a random value to append to the URL, so we can get a random response

    useEffect(() => {
        const URL: string = 'https://www.balldontlie.io/api/v1/games/' + rv //appending a random number for a random response

        const fetchData = async () => {
            try{
                const response: any = await fetch(URL)
                const json: any = await response.json() //setting our response to the json variable we are creating
                console.log(json) //logging out json to read
                setHome(json.home_team.abbreviation)
                setVisitor(json.visitor_team.abbreviation)
                setHScore(json.home_team_score)
                setVScore(json.visitor_team_score) //setting the json object to our state variables
                
               let difference: any = json.home_team_score - json.visitor_team_score //calculating the difference. subtracting home team score - visitor team score
                 setDiff(difference) //setting the difference to our state variable
                
                 let winner: any = json.home_team_score > json.visitor_team_score ? json.home_team.abbreviation : json.visitor_team.abbreviation
                 //using ternary operator. Displays the winner based on if the statement is true or false
                 setWinner(winner)
           
                }catch(error){
               alert(error)
            }
        }
        fetchData()
    }, [])

  
    return ( //here we are rendering all of our data with the template {}. 
       
        <div>
         <p className="midStyle">Home team: {home} | Away team: {visitor} </p> 
         <p className="midStyle">{home} score: {homeScore} </p>
         <p className="midStyle">{visitor} score: {visitorScore} </p>
         <p className="midStyle">Point difference for home team: {diff}</p>
         <p className="midStyle">{winner} are the winners!</p>
        </div>
    )
}
