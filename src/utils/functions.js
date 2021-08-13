const API_USR = "https://api.github.com/users/";
const getDataUser = async (name) => {
  try {
    const res = await fetch(`${API_USR}${name}`);
    const data = res.json();
    return data;
  } catch (err) {
    const error = new Error(err);
    console.log(error);
  }
};

export { getDataUser };

const API_REPOS = "https://api.github.com/users/";
const getDataRepo = async (name) => {
  try {
    const res = await fetch(`${API_REPOS}${name}/repos`);
    const data = res.json();
    return data;
  } catch (err) {
    const error = new Error(err);
    console.log(error);
  }
};

export { getDataRepo };

const getStatus = async (url) => {
  const res = await fetch(url);
  const status = res.status;
  return status;
};

export { getStatus };
