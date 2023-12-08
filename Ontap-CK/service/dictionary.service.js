const API = "https://653f4b7b9e8bd3be29e02fc1.mockapi.io/dictionary";

export const fetchData = async (id) => {
  try {
    const response = await fetch(`${API}/${id}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDataToAPI = async (dic, id) => {
  try {
    const updateDic = async () => {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        body: JSON.stringify(dic),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

    await updateDic();
    return "UPDATE SUCCESS";
  } catch (error) {
    console.log(error);
  }
};
