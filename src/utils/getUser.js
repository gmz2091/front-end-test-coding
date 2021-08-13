const API = "https://api.github.com/search/users?q=";

const getUserList = async (user) => {
  try {
    const res = await fetch(`${API}${user}&per_page=10`);
    const data = res.json();
    return data;
  } catch (err) {
    const error = new Error(err);
    console.log(error);
  }
};

export default getUserList;
