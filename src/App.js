import './App.css';
import React from 'react'
import propTypes from 'prop-types';
import styled from "@emotion/styled";
import { Button } from '@mui/material';

const PokemonRow = ({ pokemon, onSelect }) =>
(
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(',')}</td>
    <td><Button
      variant="outlined"
      onClick={() => onSelect(pokemon)}>Select!</Button></td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.shape({
      english: propTypes.string,
    }),
    type: propTypes.arrayOf(propTypes.string)
  }),
  onSelect: propTypes.func,
};

const PokemonInfo = ({ name, base }) =>
(<div>
  <h1> {name.english}</h1>
  <table>
    {Object.keys(base).map((key) => (
      <tr>
        <td>{key}</td>
        <td>{base[key]}</td>
      </tr>
    ))}
  </table>
</div>)

PokemonInfo.propTypes = {
  name: propTypes.shape({
    english: propTypes.string,
  }),
  base: propTypes.shape({
    HP: propTypes.number.isRequired,
    Attack: propTypes.number.isRequired,
    Defense: propTypes.number.isRequired,
    "Sp .attack": propTypes.number.isRequired,
    "sp .defense": propTypes.number.isRequired,
    Speed: propTypes.number.isRequired,
  }),
};


const TwoColumnsLayout = styled.div`
 display: grid,
grid-template-columns: 70%  30%,
grid-column-gap: 1rem
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      filter :"",
      pokemon :[],
      selectedItem:null,
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => this.setState( {...this.state,pokemon:data}));
  }

  render() {
    return (
      <div className='title'>
        <h1
          style={{
            margin: "auto",
            width: 800,
            paddingTop: "1rem"
          }}
        >Pokemon search</h1>
        <input value={this.state.filter}
          onChange={(evt) => this.setState({...this.state, filter: evt.target.value})}
        />
        <TwoColumnsLayout>
          <div>
            <table width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type </th>
                </tr>
              </thead>
              <tbody style={
                { textAlign: 'center' }
              }>
  
                {this.state.pokemon.filter((pokemon) => pokemon.name.english.toLowerCase()
                  .includes(this.state.filter.toLowerCase()))
                  .slice(0, 20)
                  .map((pokemon) => (
                    <PokemonRow pokemon={pokemon} key={pokemon.id}
                      onSelect={(pokemon) => this.setState({...this.state,selectedItemSet:pokemon})} />
                  )
                  )}
  
              </tbody>
            </table>
          </div>
          {this.state.selectedItem && <PokemonInfo {...this.state.selectedItem} />}
        </TwoColumnsLayout>
      </div>
    );
  }
}

// React.useEffect(
//   () => {
//     fetch("http://localhost:3000/starting-react/pokemon.json")
//       .then((resp) => resp.json())
//       .then((data) => pokemonSet(data));

//   },
//   []
// );
export default App;
