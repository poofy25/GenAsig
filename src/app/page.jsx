import Image from "next/image";
import styles from "./page.module.css";

import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import Asig from "./components/Asig/Asig";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
       <Hero/>
       <Asig/>
    </main>
  );
}
