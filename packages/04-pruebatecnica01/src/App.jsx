import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

function App() {
  const [fact, setFact] = useState('Cargando...')
  const [imgURL, setImgUrl] = useState("")

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        // Obtengo las tres primeras palabras del fact
        const firstWords = fact.split(' ').slice(0, 3).join(' ')

        // Genero la URL de la imagen directamente
        setImgUrl(`https://cataas.com/cat/says/${encodeURIComponent(firstWords)}`)
      })
      .catch(error => console.error("Error al obtener el hecho del gato:", error))
  }, [])



  const handleClick = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      setFact(fact)
     }, [])

  }



  return (
    <main>
      <button onClick={handleClick}>New IMG </button>
      <h1 >Gatos</h1>
      {fact && <p>{fact}</p>}
      {imgURL && <img src={imgURL} alt="Gato aleatorio" />}
    </main>
  )
}

export default App
