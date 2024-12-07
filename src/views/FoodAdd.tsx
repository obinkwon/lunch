import React, { useState, useEffect } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalFooter,
  ModalBody,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FoodTypes } from "@type/food";

function FoodAdd() {
  const [state, setState] = useState(false);
  const [food, setFood] = useState<FoodTypes | any>({});
  const addFood = () => {
    toggleModal(true);
  };

  const changeInput = (event: any) => {
    console.log(event.target.id);
    if (event.target.id == "type")
      setFood({ ...food, type: event.target.value });
    if (event.target.id == "name")
      setFood({ ...food, name: event.target.value });
    if (event.target.id == "desc")
      setFood({ ...food, desc: event.target.value });
  };

  const setFoodData = async () =>
    await fetch("http://localhost:8081/food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(food),
    }).then((response) => {
      if (response.ok) {
        toggleModal(false);
      } else {
        console.error("error");
      }
    });

  const toggleModal = (click: boolean) => {
    setState(click);
  };

  return (
    <>
      <Card className="d-flex">
        <CardHeader>메뉴 추가</CardHeader>
        <CardBody>
          <InputGroup>
            <InputGroupText>종류</InputGroupText>
            <Input id="type" value={food.type} onChange={changeInput} />
            <InputGroupText>상호명</InputGroupText>
            <Input id="name" value={food.name} onChange={changeInput} />
            <InputGroupText>요리</InputGroupText>
            <Input id="desc" value={food.desc} onChange={changeInput} />
          </InputGroup>
          <Button
            className="mt-3 justify-content-center"
            color="warning"
            type="button"
            onClick={() => addFood()}
          >
            추가하기
          </Button>
        </CardBody>
      </Card>
      <Modal
        className="modal-dialog-centered modal-dialog"
        isOpen={state}
        toggle={() => toggleModal(true)}
      >
        <div className="modal-header">
          <h5 className="modal-title">메뉴 추가</h5>
          <Button
            aria-label="btn-close"
            className="btn-close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal(false)}
          ></Button>
        </div>

        <ModalBody>
          <div className="py-3 text-center">
            <h4 className="heading mt-4">{food.name} 을 추가하시겠습니까?</h4>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-secondary"
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => setFoodData()}
          >
            추가
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default FoodAdd;
