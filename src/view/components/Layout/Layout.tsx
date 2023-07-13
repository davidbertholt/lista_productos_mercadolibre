import { Outlet } from "react-router-dom";
import { Navbar, Path } from "..";

interface LayoutInterface {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <>
      <header>
        <Navbar />
        <Path />
      </header>
      <main>
        <Outlet />
      </main>
      {children}
    </>
  );
};

export default Layout;
