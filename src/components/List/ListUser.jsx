import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStatus } from "../../utils/functions";

const ListUser = ({ user }) => {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const statusUsr = async () => {
      const status = await getStatus(user.avatar_url);
      setStatus(status);
    };
    statusUsr();
  }, [user.avatar_url, status]);
  return (
    <div className="bg-white shadow-xl  py-6 flex flex-wrap justify-center">
      <div className="w-full flex justify-center items-center text-xs text-gray-400 pb-4">
        <p className="text-black">ID: </p>
        <p>{user.id}</p>
      </div>
      {status !== 200 ? (
        <div className="animate-pulse">
          <div className="rounded-full bg-blue-400 h-24 w-24"></div>
        </div>
      ) : (
        <div className="w-24 h-24">
          <img
            src={user.avatar_url}
            alt=""
            className="shadow-2xl rounded-full w-full overflow-hidden"
          />
        </div>
      )}
      <div className="w-full flex justify-center pt-4 text-lg">
        <Link to={`/user/${user.login}`}>{user.login}</Link>
      </div>
    </div>
  );
};

export default ListUser;
