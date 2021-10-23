import React, { ReactElement } from 'react' //making a react functional component and importing react element

//exporting this function for use in app.tsx, it takes in a title prop from the app page, of type string. and then renders it in an h2 with a styled class
export default function Title({ title }: { title: string }): ReactElement {
    return <h2 className="balldontlietitle">{title}</h2>
}
