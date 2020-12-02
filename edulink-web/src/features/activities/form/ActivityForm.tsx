import React, { FormEvent, useState } from "react";
import { Button, ButtonGroup, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { v4 as uuid } from "uuid";

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  createActivity,
  editActivity,
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        date: "",
        description: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          placeholder="Title"
          name="title"
          value={activity.title}
        ></Form.Input>
        <Form.TextArea
          onChange={handleInputChange}
          name="description"
          rows={4}
          placeholder="Description"
          value={activity.description}
        ></Form.TextArea>
        <Form.Input
          onChange={handleInputChange}
          name="date"
          type="datetime-local"
          placeholder="Date"
          value={activity.date}
        ></Form.Input>
        <ButtonGroup widths={2}>
          <Button content="Save" color="green" type="submit" />
          <Button
            content="Cancel"
            color="red"
            type="button"
            onClick={() => setEditMode(false)}
          />
        </ButtonGroup>
      </Form>
    </Segment>
  );
};
