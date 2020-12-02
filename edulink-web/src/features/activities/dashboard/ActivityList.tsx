import React from "react";
import { Item, Button, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  setEditMode: (editMode: boolean) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityList: React.FC<IProps> = ({ activities, selectActivity, setEditMode, deleteActivity }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>{activity.description}</Item.Description>
              <Item.Extra>
                <Button floated="right" content="View" color="blue" onClick={() => { selectActivity(activity.id); setEditMode(false) }} />
                <Button floated="right" content="Delete" color="red" onClick={() => { deleteActivity(activity.id); }} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
