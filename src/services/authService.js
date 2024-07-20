import UniversalCookie from "universal-cookie";

const cookie = new UniversalCookie();

const COOKIE_NAME = "user_cookie";

export const setCookie = (username) => {
  cookie.set(COOKIE_NAME, username, { path: "/" });
};

export const getCookie = () => {
  return cookie.get(COOKIE_NAME);
};

export const removeCookie = () => {
  cookie.remove(COOKIE_NAME);
};
