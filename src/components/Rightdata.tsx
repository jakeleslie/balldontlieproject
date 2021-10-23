import React, { ReactElement, useEffect, useState } from 'react' //importing useeffect and usestate so we can store our json data inside of the state

export default function Rightdata(): ReactElement {
    const [name, setName] = useState<string>("") //creating all of our state variables which are all going to be empty and of type string
    const [position, setPosition] = useState<string>("")
    const [team, setTeam] = useState<string>("")
    const [conference, setConference] = useState<string>("")
    const [weight, setWeight] = useState<string>("")

    let randomVal: number = Math.random() * (25-1) + 1 //creating a random number variable so that on refresh wec can access random api data
    let rv: string = randomVal.toString()

    useEffect(() =>{
        const URL: string = 'https://www.balldontlie.io/api/v1/players/' + rv //appending our random number to the url so we can get a random url each time
        const fetchData = async() => {
            try{
                const response: any = await fetch(URL) 
                const json: any = await response.json()
                console.log(json)
                let fullName: string = json.first_name + " " + json.last_name //appending first and last name so we can store the full name in the state variable
                setName(fullName)
                setPosition(json.position) //setting the position to the variable

                let teamName: string = json.team.city + " " + json.team.name
                setTeam(teamName) //setting the team name with appending two json strings

                setConference(json.team.conference)

                let weight: any = (json.weight_pounds != null) ? json.weight_pounds : 'Unavailable' //uses ternary. if true display pounds, if false display unavailable
                setWeight(weight)
            }catch(error){
                alert(error)
            }
        }
        fetchData()
    }, [])
    return ( //displaying all of our data. much easier than with a map. 
        <div> 
          <p className="midStyle">Name: {name}</p>
        <p className="midStyle">Position: {position}</p>
        <p className="midStyle">Team: {team}</p>
        <p className="midStyle">Conference: {conference}</p>
        <p className="midStyle">Weight: {weight}</p>
        </div>
    )
}
 