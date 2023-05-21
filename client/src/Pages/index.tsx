import Landing from "./Landing";
import MobilePhones from "./MobilePhones";
import Cart from "./Cart";

const Pages = {
  Landing,
  MobilePhones,
  Cart,
};

export default Pages;

export enum Paths {
  LANDING = "/",
  MOBILE_PHONES = "/mobile-phones",
  CART = "/cart",
}
