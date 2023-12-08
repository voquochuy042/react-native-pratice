const initialState = {
  dictionary: {
    id: "",
    username: "",
    password: "",
    english: [{ id: "", word: "" }],
    vietnamese: [{ id: "", word: "" }],
  },
  // Select object need update
  selectEng: { id: "", word: "" },
  selectVN: { id: "", word: "" },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setData":
      return {
        ...state,
        dictionary: { ...action.payload },
      };
    case "add-vn":
      return {
        ...state,
        dictionary: {
          ...state.dictionary,
          vietnamese: [...state.dictionary.vietnamese, action.payload],
        },
      };
    case "add-eng":
      return {
        ...state,
        dictionary: {
          ...state.dictionary,
          english: [...state.dictionary.english, action.payload],
        },
      };
    case "delete-vn": {
      return {
        ...state,
        dictionary: {
          ...state.dictionary,
          vietnamese: state.dictionary.vietnamese.filter(
            (item) => item.id != action.payload.id
          ),
        },
      };
    }
    case "delete-eng": {
      return {
        ...state,
        dictionary: {
          ...state.dictionary,
          english: state.dictionary.english.filter(
            (item) => item.id != action.payload.id
          ),
        },
      };
    }
    case "select-vn":
      return {
        ...state,
        selectVN: action.payload,
      };
    case "select-eng":
      return {
        ...state,
        selectEng: action.payload,
      };
    case "update-vn":
      return {
        ...state,
        dictionary: {
          ...state.dictionary,
          vietnamese: state.dictionary.vietnamese.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        },
      };
    case "update-eng":
      return {
        ...state,
        dictionary: {
          ...state.dictionary,
          english: state.dictionary.english.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        },
      };
    default:
      return state;
  }
};

export default appReducer;
