import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Esto es Cine",
  description: "Peliculas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
      <body className={inter.className}>
        {children}
      </body>
      </Provider>
    </html>
  );
}
