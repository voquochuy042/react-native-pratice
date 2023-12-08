export const setData = (dictionary) => {
  return { type: "setData", payload: dictionary, };
};

export const addVN = (wordVN) => {
  return { type: "add-vn", payload: wordVN };
};

export const addEng = (wordEng) => {
  return { type: "add-eng", payload: wordEng };
};

export const deleteVN = (dic) => {
  return { type: "delete-vn", payload: dic, };
};

export const deleteEng = (dic) => {
  return { type: "delete-eng", payload: dic, };
};

export const updateVN = (word) => {
  return {
    type: "update-vn", payload: word,
  };
};

export const updateEng = (word) => {
  return {
    type: "update-eng", payload: word,
  };
};

export const selectVN = (word) => {
  return {
    type: "select-vn", payload: word,
  };
};

export const selectEng = (word) => {
  return {
    type: "select-eng", payload: word,
  };
};
