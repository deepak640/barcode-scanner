import React, { useEffect, useState } from "react";
import "../css/Scanner.css";
import { useSelector } from "react-redux";

const Scanner = () => {
  const file = useSelector((state) => state.upload);

  console.log("🚀 ~ Scanner ~ file:", file);

  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    let buffer = "";

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        setBarcode(buffer);
        buffer = "";
      } else {
        buffer += event.key;
      }
    };
    
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className="barcode-scanner-container">
      {!barcode ? (
        <div className="modal-alert">
          <h1 className="alert">Scan Through BarCode Scanner</h1>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {file
                ?.filter((item) => item.BARCODE === Number(barcode))
                .map((item, i) => {
                  console.log(item, barcode);
                  return (
                    <tr key={i}>
                      <td>{item.ITEM}</td>
                      <td>{item.RATE}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Scanner;
