/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Carrousel from "../components/Carousel";
import Waves from "./Waves";

export default function Home() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/auth`, { withCredentials: true })
      .then(() => {
        setAuth(true);
      })
      .catch(() => setAuth(false));
  }, []);

  const arrayImg = [
    { url: "/src/assets/image/toulouse.jpg", name: "Project 1" },
    { url: "/src/assets/image/toulouse.jpg", name: "Project 2" },
    { url: "/src/assets/image/toulouse.jpg", name: "Project 3" },
    { url: "/src/assets/image/toulouse.jpg", name: "Project 4" },
  ];

  return (
    <>
      {auth && auth === true ? (
        <div>
          <SearchBar />
          <Waves />
          <Carrousel arrayImg={arrayImg} />;
        </div>
      ) : (
        <p>vous n'etes pas connecter</p>
      )}
    </>
  );
}
