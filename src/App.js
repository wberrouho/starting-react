import './App.css';
import pokemon from './pokemon.json'

function App() {
  return (
    <div className='title'>
      <h1
      style={{
        margin : "auto",
        witdth : 800,
        paddingTop : "1rem"

      }}  
      >Pokemon search</h1>
      <table width="100%">
      <thead>
      <tr>
          <th>Name</th>
          <th>Type </th>
      </tr>
      </thead>
      <tbody>
      
        {pokemon.slice(0,20).map((pokemon) => (
      <tr key={[pokemon.id,pokemon.name.english].join(':')}>
          <td>{pokemon.name.english}</td>
          <td>{pokemon.type.join(',')}</td>
      </tr>
      )
      )}
        
      </tbody>
      </table>
    </div>
  );
}

export default App;
