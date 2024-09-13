import { Inter } from "next/font/google";
import "./globals.css";
import Main from "./Main";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legola",
  description:
    "Descubre nuestra amplia gama de pinturas, ideales para transformar cualquier espacio. Ofrecemos colores vibrantes, acabados de alta calidad y opciones ecológicas. Encuentra la pintura perfecta para tu hogar o oficina y dale vida a tus paredes con nuestros productos premium.",

  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/es-CO",
    },
  },

  openGraph: {
    images: "/Banner/BannerNosotros1.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Main>{children}</Main>

        <Toaster />
      </body>
    </html>
  );
}
