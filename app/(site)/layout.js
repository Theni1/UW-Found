import Navbar from "../components/Navbar.js";

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
