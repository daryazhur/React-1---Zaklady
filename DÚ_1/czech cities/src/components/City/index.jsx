import React from "react"

export const City = ({name, district, population, area, photo}) => (
    <div className="city">
        <h2>{name}</h2>
        <p>Okres: {district}</p>
        <p>Počet obyvatel: {population}</p>
        <p>Rozloha: {area}</p>
        <img src={photo} alt={`Fotografie města ${name}`}></img>
    </div>
)