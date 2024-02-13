import { Inter } from "next/font/google";
import "./styles/index.scss";
import Script from "next/script"

import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gen Asig",
  description: "Asigurari",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
        <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      </body>
    </html>
  );
}
