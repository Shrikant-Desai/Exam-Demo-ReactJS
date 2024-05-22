import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormattedData, getHeader } from "../utils/javascript";
import { ReduxFormActions } from "../container/reduxFormActions.container";
import { setUpdateId } from "../redux/form.slice";
// import { setFormData, setUpdateId } from "../redux/form.slice";
// import DynamicFormMain from "../container/DynamicFormMain.container";

export const EDTable = ({ formName }) => {
  const formData = useSelector((state) => state.dynamicForm);
  const dynamicFormData = useSelector(
    (state) => state.dynamicFormData?.[formName]
  );

  const headerArr = getHeader(dynamicFormData);

  const dataArray = getFormattedData(dynamicFormData);

  const dispatch = useDispatch();
  const { handleDelete, setDataIntoForm } = ReduxFormActions();

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            {headerArr.map((header, index) => (
              <th key={index} className="text-start">
                {header.toUpperCase()}
              </th>
            ))}
            {headerArr.length > 0 ? <th>Edit</th> : ""}
            {headerArr.length > 0 ? <th>delete</th> : ""}
          </tr>
        </thead>
        <tbody>
          {dataArray?.map((data, dataIndex) => (
            <tr key={dataIndex}>
              {headerArr.map((header, headerIndex) => (
                <td key={headerIndex} className="text-start">
                  {data[header]}
                </td>
              ))}
              <td>
                <button
                  className="btn btn-outline-primary"
                  disabled={
                    formData?.[formName]?.updateId === data.id ? true : false
                  }
                  onClick={() => {
                    setDataIntoForm(
                      dynamicFormData,
                      formName,
                      data.id,
                      dispatch
                    );
                    dispatch(
                      setUpdateId({
                        name: formName,
                        data: data.id,
                      })
                    );
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(formName, data.id, dispatch)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
