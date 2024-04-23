import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const PaginaInicial = () => {
  const [listaAsteroides, setListaAsteroides] = useState([])

  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
  const dia = hoje.getDate().toString().padStart(2, '0');
  const dataAtual = `${ano}-${mes}-${dia}`;

  useEffect(() => {
    const requisicao = async () => {

      const lista = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataAtual}&end_date=${dataAtual}&api_key=m17MYSox5M6FJmh1hW4CH3RiXRktkEUmnfPKLtQ5`
      );
      console.log(lista)
      setListaAsteroides(lista.data.near_earth_objects[dataAtual])
    }
    requisicao()
  }, []);
  return (
    <>
    <div style={{ marginBottom: '100px' }} >

      <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Asteroides proximos a Terra</h1>
      {listaAsteroides.map((asteroide) => (
        <Link key={asteroide.id} to={`/asteroide/${asteroide.id}`}>

          <ul key={asteroide.id}>

            <strong>Nome:</strong> {asteroide.name}<br /> 
            <strong>É potencialmente perigoso?</strong> {asteroide.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}<br />
            <strong>Diâmetro Máximo Estimado (km):</strong> {asteroide.estimated_diameter.kilometers.estimated_diameter_max}<br />
          </ul>

        </Link>
      ))}
      </div>
    </>
  );
};

export default PaginaInicial;