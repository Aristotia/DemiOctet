import Carrousel from "../components/Carrousel";

export default function Home() {
  const arrayImg = [
    { url: "/src/assets/image/toulouse.jpg", name: "Project 1" },
    { url: "/src/assets/image/toulouse.jpg", name: "Project 2" },
    { url: "/src/assets/image/toulouse.jpg", name: "Project 3" },
    { url: "/src/assets/image/toulouse.jpg", name: "Project 4" },
  ];

  return <Carrousel arrayImg={arrayImg} />;
}
