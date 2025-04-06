import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export const metadata = {
  title: "FixMaster | Servicios profesionales de electricidad, plomería y mantenimiento",
  description:
    "Servicios profesionales de electricidad, plomería y mantenimiento general para hogares y negocios. Calidad garantizada y atención 24/7.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="scroll-smooth">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false} // o true si quieres que respete el sistema
        >
          {/* 👇 Evita cualquier lógica reactiva fuera de 'useEffect' en los hijos */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
