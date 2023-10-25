import axios from 'axios';
import React, {Component} from 'react'

class App extends Component {

  state = {
    text :""
  };

  handleAdd= async e=>{
    await this.setState({text:e.target.value})
  }

  handleSubmit= async e=>{    
    e.preventDefault();
    console.log(this.state.text)
    let fromData = new FormData();
    fromData.append('text', this.state.text);
    const url = "http://localhost:80/react-php-project/react-php-backend/";
    axios.post(url, fromData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <br></br>
      <input 
      onChange={this.handleAdd}     
      className='form-control' 
      value={this.state.text}
      type='text' 
      id='text' 
      name='text' 
      placeholder='Enter ant Text Name Hear'/>
      <br/>
      <button 
      onClick={this.handleSubmit}
      className='btn btn-success' 
      id='submit' 
      name='submit'>Submit</button>
    </div>
    )
  } 
}


// FUNCTIONAL COMPONENT
function App() {
  return (
  <div className="App">
  <input className='form-control' type='text' id='text' name='text' placeholder='Enter ant Text Name Hear'/>
  <button className='btn btn-success' id='submit' name='submit'>Submit</button>
</div>    
  );
}

export default App;
