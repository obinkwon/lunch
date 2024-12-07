/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import Foods from "@view/Foods";
import FoodList from "@view/FoodList";
import FoodAdd from "@view/FoodAdd";
import "bootstrap/dist/css/bootstrap.css";
import { FoodTypes } from "@type/food";

function Main() {
  const [foodData, setFoodData] = useState<FoodTypes[]>([]);
  useEffect(() => {
    getFoodData();
  }, []);

  const getFoodData = async () =>
    await fetch("http://localhost:8081/food", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        setFoodData(data);
      });

  return (
    <Container fluid={true} className="text-center">
      <Row className="align-items-center">
        <Col className="d-flex mt-5 justify-content-center">
          <FoodAdd />
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="d-flex mt-5 justify-content-center">
          <FoodList jsonData={foodData} setData={setFoodData} />
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="d-flex mt-5 justify-content-center">
          <Foods jsonData={foodData} />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
