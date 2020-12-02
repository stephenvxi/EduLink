import React from "react";
import { Button, ButtonGroup, Card } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDetails: React.FC<IProps> = ({
  activity,
  setEditMode,
  setSelectedActivity,
}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup widths={3}>
          <Button
            basic
            content="Edit"
            color="green"
            onClick={() => setEditMode(true)}
          />
          <Button
            basic
            content="Close"
            color="blue"
            onClick={() => setSelectedActivity(null)}
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
};
