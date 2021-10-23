import React, { ReactElement, useEffect, useState } from 'react'

export default function Rightdata(): ReactElement {
    const [name, setName] = useState<string>("")
    const [position, setPosition] = useState<string>("")
    const [team, setTeam] = useState<string>("")
    const [conference, setConference] = useState<string>("")
    const [weight, setWeight] = useState<string>("")

    let randomVal: number = Math.random() * (25-1) + 1
    let rv: string = randomVal.toString()

    useEffect(() =>{
        const URL: string = 'https://www.balldontlie.io/api/v1/players/' + rv
        const fetchData = async() => {
            try{
                const response: any = await fetch(URL)
                const json: any = await response.json()
                console.log(json)
                let fullName: string = json.first_name + " " + json.last_name
                setName(fullName)
                setPosition(json.position)

                let teamName: string = json.team.city + " " + json.team.name
                setTeam(teamName)

                setConference(json.team.conference)

                let weight: any = (json.weight_pounds != null) ? json.weight_pounds : 'Unavailable'
                setWeight(weight)
            }catch(error){
                alert(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div>
          <p className="midStyle">Name: {name}</p>
        <p className="midStyle">Position: {position}</p>
        <p className="midStyle">Team: {team}</p>
        <p className="midStyle">Conference: {conference}</p>
        <p className="midStyle">Weight: {weight}</p>
        </div>
    )
}
 