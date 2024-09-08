import './App.css';

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
      <tr>
          <td>bulbassur</td>
          <td>grass , poison </td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}

export default App;
