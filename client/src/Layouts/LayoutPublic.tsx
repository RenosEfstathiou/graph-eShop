import { ReactNode } from "react";
import Navbar from "../Containers/Navbar";

/**
 * layout component
 * @param {object} obj
 * @param {object} obj.children
 * @returns JSX element
 */
const LayoutPublic = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main> {children}</main>
    </div>
  );
};

export default LayoutPublic;
