import { Inter } from "next/font/google";
import "./styles/index.scss";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gen Asig",
  description: "Asigurari",
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      </body>
    </html>
  );
}
