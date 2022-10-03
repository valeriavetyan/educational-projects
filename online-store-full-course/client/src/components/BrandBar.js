import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer((props) => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer", width: "fit-content" }}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
