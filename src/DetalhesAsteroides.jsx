import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios'


const DetalheAsteroide = () => {
  const { id } = useParams()
  const [asteroide, setAsteroide] = useState(null)

  const requisicao = async () => {
    const asteroideConsulta = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=m17MYSox5M6FJmh1hW4CH3RiXRktkEUmnfPKLtQ5`
    )
    setAsteroide(asteroideConsulta.data)

  }
  useEffect(() => {
    requisicao()
  }, [])


  return (
    <>
      <div>
        <h1>Detalhes do asteroide</h1>
        <ul>

          <li><strong> Nome: <br /> {asteroide?.name}</strong></li>
          <li><strong> URL: <br /> {asteroide?.nasa_jpl_url}</strong></li>
          <li><strong> É potencialmente perigoso?<br />{asteroide?.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}<br /></strong></li>
          <li><strong> Diâmetro Máximo Estimado (km): <br /> {asteroide?.estimated_diameter.kilometers.estimated_diameter_max}</strong></li>
          <li><strong> Velocidade relativa do objeto por hora: <br /> {asteroide?.close_approach_data?.[0]?.relative_velocity?.kilometers_per_hour} </strong> </li>
          <li><strong> Magnitude absoluta: <br /> {asteroide?.absolute_magnitude_h}</strong></li>

        </ul>


      </div >
    </>
  )
}



export default DetalheAsteroide;