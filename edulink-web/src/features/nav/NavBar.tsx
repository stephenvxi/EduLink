import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "16px" }}
          />
          EduLink
        </Menu.Item>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item name="Schools" />
        <Menu.Item>
          <Button positive content="Create School" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
