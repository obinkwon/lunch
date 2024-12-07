import React from "react";
// reactstrap components
import { Table, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FoodTypes } from "@type/food";

function FoodList(data: { jsonData: FoodTypes[]; setData: any }) {
  const removeFood = (num: number) => {
    data.setData(data.jsonData.filter((item, index) => item.id !== num));
  };

  return (
    <div style={{ overflow: "auto", width: "700px", height: "300px" }}>
      <h3>안땡기는거 제거</h3>
      <Table className="table-hover">
        <tbody>
          <tr>
            <th>종류</th>
            <th>상호명</th>
            <th>요리</th>
            <th>제거</th>
          </tr>
          {data.jsonData.map((item, index) => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>
                <Button
                  aria-label="btn-close"
                  className="btn-close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => removeFood(item.id)}
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FoodList;
