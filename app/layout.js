import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Valley Allergy + Wellness",
  description: "Relief starts here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-screen-2xl mx-auto">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
