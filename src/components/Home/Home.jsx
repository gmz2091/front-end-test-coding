import React, { useState } from "react";
import Form from "../Form/Form";
import getUserList from "../../utils/getUser";
import Spinner from "../Spinner/Spinner";
import ListUser from "../List/ListUser";
import Alert from "../Alert/Alert";
const Home = () => {
  const [users, setUser] = useState("");
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (users.length < 4 || users === "" || users === "noloro") {
      return setError(true);
    }
    setLoaded(true);
    try {
      setError(false);
      const data = await getUserList(users);
      setUserList(data.items);
      setLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="text-2xl pt-12 pl-12">GitHub Users</h1>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} />
      <div className="w-full flex items-center justify-center">
        {loaded ? <Spinner /> : null}
      </div>
      <div
        className={
          userList.length === 0
            ? "bg-gray-100 h-screen w-full py-8"
            : "bg-gray-100 h-full w-full py-8"
        }
      >
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 w-11/12 m-auto">
          {userList.map((user) => (
            <ListUser user={user} key={user.id} />
          ))}
        </div>
      </div>
      {error ? <Alert setError={setError} /> : null}
    </>
  );
};

export default Home;
