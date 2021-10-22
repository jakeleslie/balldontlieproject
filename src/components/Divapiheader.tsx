import React, { ReactElement } from 'react'


export default function Divapiheader({ divtitle }: { divtitle: string}): ReactElement {
    return (
        <h3 className="innerdivheader">{divtitle}</h3>
    )
}
