import SearchBar from "../components/SearchBar";
import Carrousel from "../components/Carrousel";
import SliderMenu from "../components/SliderMenu";

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
      <SliderMenu
        list={["cow", "tartine", "rhubarbe"]}
        category="componentTest"
      />
      <SliderMenu
        list={["crue", "brulée ", "saignante", "PARPAIIING"]}
        category="Cuisson de tartine"
      />
      <Carrousel arrayImg={arrayImg} />;
    </>
  );
}
