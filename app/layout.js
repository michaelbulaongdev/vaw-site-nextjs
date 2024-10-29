import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";

require("dotenv").config();

export const metadata = {
  title: "Valley Allergy + Wellness",
  description: "Relief starts here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
