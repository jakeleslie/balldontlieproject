import React, { ReactElement } from 'react'



export default function ContentTitle({ header }: { header: string}): ReactElement {
    return (
        
            <h2 className="contentTitle">{ header }</h2>
    
    )
}
