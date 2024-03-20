import React from "react"
import { useParams } from "react-router-dom"


export default function Resources ({resources}){
    //Kilde til useParams: https://lms.webtricks.blog/kurs/uin/react-navigasjon-og-layout/dynamiske-slugs
    let {id} = useParams()
    const resource = resources[id]

    return(
        <div id="container">
            <h2>{resource.category}</h2>
            <p>{resource.text}</p>
            <ul> {resource.sources.map((source, index) => (
                <li key={index}>
                    <a href={source.url}>{source.title}</a>
                </li>
                ))}
            </ul>
        </div>
    )
}