import React, { ReactElement } from 'react'

export default function ContentTitle({ header }: { header: string}): ReactElement {
    return (
            <h2 className="contentTitle">{ header }</h2> //This is very similar to another component. Takes in a header string from app.tsx, and displays it
    )
}
