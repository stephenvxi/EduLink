import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Header, List } from 'semantic-ui-react'

class App extends Component {
  state = {
    schools: []
  }
  
  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/schools")
      .then((response) => {
        this.setState({
          schools: response.data
        });
      });
  }

  render () {
    return (
      <div>
        <Header as="h3"><Header.Content>Schools List Test</Header.Content></Header>
        <List>
          {this.state.schools.map((school: any) => (
            <List.Item key={school.id}>
              <List.Content>{school.name}</List.Content>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
