import { Button, Dropdown } from "react-daisyui";

type Props = {};

const UserSettings = (props: Props) => {
  return (
    <Dropdown vertical={"bottom"}>
      <Button color="ghost" className="avatar" shape="circle">
        <div className="w-10 rounded-full">
          <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBWcTKT?w=300&h=157&q=60&m=6&f=jpg&u=t" />
        </div>
      </Button>
      <Dropdown.Menu className="w-52 menu-compact right-0">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserSettings;
