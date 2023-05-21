import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Navbar as DaisyNavbar } from "react-daisyui";
import CartDropDown from "../../Components/Navbar/CartDropDown";
import UserSettings from "../../Components/Navbar/UserSettings";

const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full component-preview pb-2 gap-2 font-sans ">
      <DaisyNavbar className="bg-primary text-primary-content px-12 rounded-b-lg">
        <div className="flex-0">
          <Button
            className="text-xl normal-case"
            color="ghost"
            onClick={() => navigate("/")}
          >
            Μπαχαλάδικο
          </Button>
        </div>

        <div className="flex-1 justify-center">
          <Button
            variant={"link"}
            className="text-sm no-underline hover:no-underline hover:text-slate-200 text-slate-50 normal-case"
            color="primary"
            onClick={() => navigate("/mobile-phones")}
          >
            Mobile Phones
          </Button>
        </div>

        <div className="flex-none">
          <CartDropDown />
          <UserSettings />
        </div>
      </DaisyNavbar>
    </div>
  );
};

export default Navbar;
