import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faUserFriends,
  faBuilding,
  faMapMarkerAlt,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { getDataRepo, getDataUser } from "../../utils/functions";
import Spinner from "../Spinner/Spinner";

const UserDetails = () => {
  const [dataUsr, setDataUsr] = useState([]);
  const [repos, setRepos] = useState([]);
  const history = useHistory();
  let { login } = useParams();

  const convertDate = (date) => {
    const repoDate = new Date(date);
    return repoDate.toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      year: "numeric",
      month: "long",
    });
  };

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDataUser(login);
      setDataUsr(data);
      const repo = await getDataRepo(login);
      setRepos(repo);
    };
    getEvents();
  }, [login]);
  return (
    <div className="w-11/12 grid grid-cols-1 md:grid-cols-12 gap-5 m-auto pt-24 relative">
      <button
        className="absolute top-12 left-0"
        onClick={() => {
          history.goBack();
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
      </button>
      <div className="col-span-3 py-6">
        {dataUsr.length !== 0 ? (
          <>
            <div className="flex md:block items-center">
              <div className="md:w-full w-44 md:m-auto rounded-full flex justify-center items-center">
                <img
                  src={dataUsr.avatar_url}
                  alt={dataUsr.name}
                  className="rounded-full w-10/12 shadow-2xl"
                />
              </div>
              <div className="sm:w-full text-2xl font-bold my-4">
                <p>{dataUsr.name}</p>
                <p className="text-gray-400 font-normal">{dataUsr.login}</p>
              </div>
            </div>
            <div className="w-full font-bold text-gray-600 flex flex-wrap mt-2">
              <p>{dataUsr.bio}</p>
            </div>
            <div className="lg:flex items-center text-gray-400 mt-8 w-full">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faUserFriends}
                  className="mr-1 text-sm"
                />
                <p className="text-sm mr-1 text-gray-600 font-bold">
                  {dataUsr.followers}
                </p>
                <p className="text-sm">fallowers</p>
              </div>
              <div className="hidden lg:block w-1 h-1 rounded-full bg-black ml-2 mr-2"></div>
              <div className="flex items-center">
                <p className="text-sm mr-1 text-gray-600 font-bold">
                  {dataUsr.following}
                </p>
                <p className="text-sm">following</p>
              </div>
            </div>
            <div className="w-full mt-8">
              {dataUsr.company == null ? null : (
                <div className="flex items-center mb-1">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="mr-1 text-sm text-gray-600"
                  />
                  <p className="text-sm mr-1 font-bold">{dataUsr.company}</p>
                </div>
              )}
              {dataUsr.location == null ? null : (
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-1 text-sm text-gray-600"
                  />
                  <p className="text-sm mr-1 font-bold">{dataUsr.location}</p>
                </div>
              )}
              {dataUsr.mail == null || dataUsr.mail === "" ? null : (
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-1 text-sm text-gray-600"
                  />
                  <p className="text-sm mr-1 font-bold">{dataUsr.mail}</p>
                </div>
              )}
              {dataUsr.blog == null || dataUsr.blog === "" ? null : (
                <div className="flex items-center mt-1">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="mr-1 text-sm text-gray-600"
                  />
                  <a
                    href={dataUsr.blog}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm mr-1 font-bold"
                  >
                    {dataUsr.blog}
                  </a>
                </div>
              )}
              {dataUsr.twitter_username == null ? null : (
                <div className="flex items-center mt-1">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="mr-1 text-sm text-gray-600"
                  />
                  <p className="text-sm mr-1 font-bold">
                    @{dataUsr.twitter_username}
                  </p>
                </div>
              )}
              {dataUsr.twitter_username == null ? null : (
                <div className="flex items-center mt-1">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="mr-1 text-sm text-gray-600"
                  />
                  <a
                    href={dataUsr.html_url}
                    className="text-sm mr-1 font-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {dataUsr.twitter_username}
                  </a>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="h-screen flex justify-center">
            <Spinner />
          </div>
        )}
      </div>
      <div className="w-full px-2 sm:col-span-8 md:col-span-9">
        {repos.map((repo) => (
          <div key={repo.id} className="border-t border-gray-400 mb-2 py-6">
            <p className="text-xl">{repo.name}</p>
            <p className="text-xs text-gray-500">{repo.description}</p>
            <div className="flex flex-wrap items-center mt-2">
              {repo.language === "JavaScript" ? (
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
              ) : repo.language === "HTML" ? (
                <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
              ) : repo.language === "TypeScript" ? (
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-1"></div>
              ) : repo.language === "CSS" ? (
                <div className="w-3 h-3 bg-purple-700 rounded-full mr-1"></div>
              ) : repo.language === "Java" ? (
                <div className="w-3 h-3 bg-yellow-700 rounded-full mr-1"></div>
              ) : repo.language === "Go" ? (
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
              ) : repo.language === "Shell" ? (
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
              ) : repo.language === "Python" ? (
                <div className="w-3 h-3 bg-blue-900 rounded-full mr-1"></div>
              ) : repo.language === "Lua" ? (
                <div className="w-3 h-3 bg-blue-700 rounded-full mr-1"></div>
              ) : null}
              <p className="text-xs text-gray-500">{repo.language}</p>
              <p className="text-xs text-gray-500 ml-2">
                Updated
                <span className="ml-1">{convertDate(repo.updated_at)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
