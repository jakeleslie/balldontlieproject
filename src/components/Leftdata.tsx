import React, { ReactElement, useEffect, useState } from 'react'

export default function Leftdata(): ReactElement {
    const [avgppg, setAvgPpg] = useState<string>("")

    useEffect(() => {
        const URL: string = 'https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=237'
        
        const fetchData = async() => {
            try {
                const response: any = await fetch(URL)
                const json: any = await response.json()
                console.log(json)
               
            }catch(error){
                alert(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div>
           left
        </div>
    )
}
