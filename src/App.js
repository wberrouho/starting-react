import './App.css';
import pokemon from './pokemon.json';
import propTypes from 'prop-types'

const PokemonRow = ({ pokemon }) =>
(
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(',')}</td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: propTypes.shape({ name: propTypes.shape({ 
    english: propTypes.string, 
  }), 
  type: propTypes.arrayOf(propTypes.string) 
})
};
function App() {
  return (
    <div className='title'>
      <h1
        style={{
          margin: "auto",
          witdth: 800,
          paddingTop: "1rem"

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

          {pokemon.slice(0, 20).map((pokemon) => (
            <PokemonRow pokemon={pokemon} key={[pokemon.id, pokemon.name.english].join(':')} />
          )
          )}

        </tbody>
      </table>
    </div>
  );
}

export default App;
