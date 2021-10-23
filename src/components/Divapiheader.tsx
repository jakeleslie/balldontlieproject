import React, { ReactElement} from 'react'

export default function Divapiheader({ divtitle }: { divtitle: string}): ReactElement {
    return (
        <h3 className="innerdivheader">{divtitle}</h3> //This is very similar to another component. Takes in a header string from app.tsx, and displays it with a different style
    )
}
