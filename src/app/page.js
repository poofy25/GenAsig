import Image from "next/image";
import styles from "./page.module.css";

import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import Asig from "./components/Asig/Asig";

export default function Home() {
  return (
    <main>
       <NavBar/>
       <Hero/>
       <Asig/>
    </main>
  );
}
