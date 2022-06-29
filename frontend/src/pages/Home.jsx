import SearchBar from "../components/SearchBar";
import Carrousel from "../components/Carousel";
import Waves from "./Waves";

export default function Home() {
  const arrayImg = [
    { url: "/src/assets/image/toulouse.jpg", name: "Project 1" },
    { url: "/src/assets/image/toulouse.jpg", name: "Project 2" },
    { url: "/src/assets/image/toulouse.jpg", name: "Project 3" },
    { url: "/src/assets/image/toulouse.jpg", name: "Project 4" },
  ];

  return (
    <>
      <SearchBar />
      <Waves />
      <Carrousel arrayImg={arrayImg} />;
    </>
  );
}
