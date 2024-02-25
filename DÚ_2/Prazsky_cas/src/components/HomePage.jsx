import { useEffect, useState } from 'react';

export const HomePage = () => {
    const [datetime, setDatetime] = useState("")
  
    useEffect(() => {
      fetch(`https://worldtimeapi.org/api/timezone/Europe/Prague`)
      .then(response => response.json())
      .then(data => {
        const {datetime} = data
        setDatetime(datetime)
      })
    }, [])
  
    return (
      <div>
        <h1>HomePage</h1>
        <p>Aktuální čas: {datetime}</p>
      </div>
    )
  }