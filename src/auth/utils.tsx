import { UserTokenWithExpiry } from "./interface";

export const setUserDataInStorage = (
  key: string,
  token: string,
  ttl: number
): void => {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const userToken = {
    token: token,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(userToken));
};

export const getUserDataFromStorage = (
  key: string
): UserTokenWithExpiry | void => {
  const userToken = localStorage.getItem(key);
  const parssedUserData = userToken && JSON.parse(userToken);

  return isUserExpired(parssedUserData)
    ? removeExpiredUser(key)
    : parssedUserData;
};

export const isUserExpired = (userData: UserTokenWithExpiry): boolean => {
  const now = new Date();
  return !userData || now.getTime() > userData.expiry;
};

export const removeExpiredUser = (key: string): void => {
  localStorage.removeItem(key);
};
