
import './App.css'
// import withOutResult from './mocks/with-result.json'
import withResult from './mocks/withResult.json'
import {Movies} from './components/Movies'
function App() {

  const movies = withResult.Search
  
  return (
    

     
     <div className='page'> 
      <header>
        <h1>buscador de peliculas</h1>
      <form className='form'>
        <input placeholder='Avengers , Star Wars ...' />
        <button type='submit'>Buscar</button>
      </form>
      </header>

      <main>
      {
     
        <Movies movies={movies}></Movies>
      }
      </main>
     </div>

    
  )
}

export default App
