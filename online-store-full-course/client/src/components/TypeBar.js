import React, { useContext } from "react";
import { Row, ListGroup } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const TypeBar = observer((props) => {
  const { device } = useContext(Context);

  return (
    <Row>
      <ListGroup>
        {device.types.map((type) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            key={type.id}
            active={type.id === device.selectedType.id}
            onClick={() => device.setSelectedType(type)}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Row>
  );
});

export default TypeBar;
