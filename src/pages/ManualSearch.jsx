import React from "react";
import Search from "../components/Search";
import { useSelector } from "react-redux";
const ManualSearch = () => {
  const file = useSelector((state) => state.upload);
  console.log("🚀 ~ ManualSearch ~ file:", file)
  const [name, setName] = React.useState("");
  return (
    <div className="search-page-container">
      <Search name={name} setName={setName} />
      <div className="table-container">
        {file ? (
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {name &&
                file
                  ?.filter((item) =>
                    item.ITEM.toLowerCase().includes(name.toLowerCase())
                  )
                  .map((item, i) => {
                    console.log(item)
                    return (
                      <tr key={i}>
                        <td>{item.ITEM}</td>
                        <td>{item.RATE}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        ) : (
          <div className="modal-alert">
            <h1>No File uploaded</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManualSearch;
