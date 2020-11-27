import React, {Component} from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Header, List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    activities: []
  }
  
  componentDidMount() {
    axios.get<IActivity[]>("http://localhost:5000/api/v1/activities")
      .then((response) => {
        this.setState({
          activities: response.data
        });
      });
  }

  render () {
    return (
      <div>
        <Header as="h3"><Header.Content>Schools List</Header.Content></Header>
        <List>
          {this.state.activities.map((activity) => (
            <List.Item key={activity.id}>
              <List.Content>{activity.title}</List.Content>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
