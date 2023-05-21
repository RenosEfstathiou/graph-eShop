import { Button, Dropdown } from "react-daisyui";

type Props = {};

const UserSettings = (props: Props) => {
  return (
    <Dropdown vertical={"bottom"}>
      <Button color="ghost" className="avatar" shape="circle">
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
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
