import React, { ReactElement, useEffect, useState } from 'react'

export default function Middledata(): ReactElement {
    const [home, setHome] = useState<string>("")
    const [visitor, setVisitor] = useState<string>("")
    const [homeScore, setHScore] = useState<string>("")
    const [visitorScore, setVScore] = useState<string>("")
    const [diff, setDiff] = useState<string>("")
    const [winner, setWinner] = useState<string>("")
    
    let randomVal: number = Math.random() * (25 - 1) + 1
    let rv: string = randomVal.toString()

    useEffect(() => {
        const URL: string = 'https://www.balldontlie.io/api/v1/games/' + rv

        const fetchData = async () => {
            try{
                const response: any = await fetch(URL)
                const json: any = await response.json()
                console.log(json)
                setHome(json.home_team.abbreviation)
                setVisitor(json.visitor_team.abbreviation)
                setHScore(json.home_team_score)
                setVScore(json.visitor_team_score)
                
               let difference: any = json.home_team_score - json.visitor_team_score
                 setDiff(difference)
                
                 let winner: any = json.home_team_score > json.visitor_team_score ? json.home_team.abbreviation : json.visitor_team.abbreviation
                 setWinner(winner)
           
                }catch(error){
               alert(error)
            }
        }
        fetchData()
    }, [])

  
    return (
       
        <div>
         <p className="midStyle">Home team: {home} | Away team: {visitor} </p>
         <p className="midStyle">{home} score: {homeScore} </p>
         <p className="midStyle">{visitor} score: {visitorScore} </p>
         <p className="midStyle">Point difference for home team: {diff}</p>
         <p className="midStyle">{winner} are the winners!</p>
        </div>
    )
}
