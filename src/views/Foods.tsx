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
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FoodTypes } from "@type/food";

function Foods(data: { jsonData: FoodTypes[] }) {
  const [state, setState] = useState(false);
  const [food, setFood] = useState<FoodTypes | any>({});
  const [foodData, setFoodData] = useState<FoodTypes[]>([]);

  useEffect(() => {
    setFoodData(data.jsonData);
  }, [data]);

  const toggleModal = (play: boolean) => {
    setState(play);
    if (play) {
      selectFood();
    }
  };

  const selectFood = () => {
    if (foodData.length > 0) {
      const randomFood = foodData[Math.floor(Math.random() * foodData.length)];
      setFood(randomFood);
      setFoodData(foodData.filter((item, index) => item.id !== food.id));
    } else {
      alert("더이상 없음");
    }
  };

  const replayToggleModal = () => {
    toggleModal(false);
    toggleModal(true);
  };

  return (
    <>
      <Card className="d-flex">
        <CardHeader>점심메뉴 고르기</CardHeader>
        <CardBody>
          <Button
            className="mt-auto justify-content-center"
            color="warning"
            type="button"
            onClick={() => toggleModal(true)}
          >
            고르기
          </Button>
          <Modal
            className="modal-dialog-centered modal-dialog"
            isOpen={state}
            toggle={() => toggleModal(true)}
          >
            <div className="modal-header">
              <h5 className="modal-title">점심 메뉴</h5>
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
                <h4 className="heading mt-4">{food.type}</h4>
                <p>
                  {food.name}({food.desc})
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="btn-secondary"
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => replayToggleModal()}
              >
                다시 뽑기
              </Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </>
  );
}

export default Foods;
