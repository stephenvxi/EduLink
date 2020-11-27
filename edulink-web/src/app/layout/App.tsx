import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Header, List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>("http://localhost:5000/api/v1/activities")
      .then((response) => {
        setActivities(response.data);
      });   
  }, []);

  return (
    <div>
      <NavBar />
      <Header as="h3"><Header.Content>Schools</Header.Content></Header>
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>
            <List.Content>{activity.title}</List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
