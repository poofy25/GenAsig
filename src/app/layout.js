import { Inter } from "next/font/google";
import "./styles/index.scss";
import Script from "next/script"

import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gen Asig | Consultanță și Asistență în Asigurări",
  description: "Consultanță și asistență în asigurări pentru protecția ta financiară. Descoperă soluțiile noastre personalizate pentru asigurări și siguranță pe termen lung.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <meta property="og:title" content="Gen Asig | Consultanță și Asistență în Asigurări"/>
        <meta property="og:description" content="Consultanță și asistență în asigurări pentru protecția ta financiară. Descoperă soluțiile noastre personalizate pentru asigurări și siguranță pe termen lung."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://next-js-app-nine-gamma.vercel.app/"/>
        <meta property="og:image" content="/public/assets/logos/logo_black.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="https://next-js-app-nine-gamma.vercel.app/"/>
        <meta name="twitter:title" content="Gen Asig | Consultanță și Asistență în Asigurări"/>
        <meta name="twitter:description" content="Consultanță și asistență în asigurări pentru protecția ta financiară. Descoperă soluțiile noastre personalizate pentru asigurări și siguranță pe termen lung."/>
        <meta name="twitter:image" content="/public/assets/logos/logo_black.png"/>

        <meta name="keywords" content="Asigurări, Asistență, Asistenta, Asigurari, Consulanta, Consultanță, RCA, Asigurare Medicala, Carte Verde, Vinieta, Casco, Asigurari Online"/>
        <meta name="author" content="Buza Cristian"/>

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>


      </head>
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
        <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      </body>
    </html>
  );
}
