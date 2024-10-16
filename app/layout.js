import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Valley Allergy + Wellness",
  description: "Root cause solutions for everyday health problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-screen-2xl mx-auto">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
