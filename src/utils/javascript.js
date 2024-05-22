export const getStateValue = (state, pathArr) => {
  let currentState = state;
  return pathArr.reduce((accum, item) => {
    if (currentState?.[item]) {
      currentState = currentState[item];
    } else {
      currentState = {};
    }
    accum = { ...currentState };
    return accum;
  }, {});
};

export const getFieldArr = (formArray, currentFormName, fieldValue) => {
  let data;
  const getFieldFromNestedArray = (formArray, currentFormName, fieldValue) => {
    formArray.map((item) => {
      if (item.type === "subForm") {
        getFieldFromNestedArray(item.subFormArr, currentFormName, fieldValue);
      } else {
        if (item.fieldName === fieldValue) {
          data = item;
        }
      }
      return item;
    });
  };
  getFieldFromNestedArray(formArray, currentFormName, fieldValue);
  return data;
};

export const getHeader = (arr) => {
  let headerArr = [];
  const makeHeaderFromArray = (arr) => {
    arr?.flatMap((obj) => {
      const data = Object.entries(obj)
        .map(([key, value]) => {
          return typeof value === "object" ? makeHeaderFromObject(value) : key;
        })
        .flat(Infinity)
        .filter((item) => (item === "id" ? false : true));
      headerArr = [...headerArr, ...data];
      return data;
    });
  };
  const makeHeaderFromObject = (obj) => {
    const data = Object.entries(obj).map(([key, value]) => {
      return typeof value === "object" && !Array.isArray(value)
        ? makeHeaderFromObject(value)
        : key;
    });

    return data;
  };
  makeHeaderFromArray(arr);
  headerArr = Array.from(new Set(headerArr));
  return headerArr;
};

export const getFormattedData = (arr) => {
  let dataArray = [];
  let newData = [];
  const makeHeaderFromArray = (arr) => {
    arr?.flatMap((obj) => {
      const data = Object.entries(obj).map(([key, value]) => {
        return typeof value === "object"
          ? makeHeaderFromObject(value)
          : [key, value];
      });

      getNestedData(data);

      dataArray = [...dataArray, Object.fromEntries(newData)];
      newData = [];

      return data;
    });
  };

  const getNestedData = (data) => {
    data.map((item) => {
      if (item[0] !== "hobbies" && Array.isArray(item[1] || item)) {
        return getNestedData(item);
      } else {
        newData = [...newData, item];
        return item;
      }
    });
  };

  const makeHeaderFromObject = (obj) => {
    const tempData = Object.entries(obj).map(([key, value]) => {
      return typeof value === "object" && !Array.isArray(value)
        ? makeHeaderFromObject(value)
        : [key, value];
    });
    return tempData;
  };
  makeHeaderFromArray(arr);
  return dataArray;
};
