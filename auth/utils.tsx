import { useEffect } from "react";
import { UserTokenWithExpiry } from "./interface";

export const setUserDataInStorage = (
  key: string,
  token: string,
  expiry: number
): void => {
  const userToken = {
    token,
    expiry,
  };

  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(userToken));
  }
};

export const getUserDataFromStorage = (
  key: string
): UserTokenWithExpiry | void => {
  if (typeof window !== "undefined") {
    const userToken = localStorage.getItem(key);

    const parsedUserData = userToken && JSON.parse(userToken);

    return isUserExpired(parsedUserData)
      ? removeExpiredUser(key)
      : parsedUserData;
  }
};

export const isUserExpired = (userData: UserTokenWithExpiry): boolean => {
  const now = new Date();
  return !userData || now.getTime() > userData.expiry;
};

export const removeExpiredUser = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
