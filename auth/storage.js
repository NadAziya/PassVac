import * as SecureStore from "expo-secure-store";

const key = "bvusibvfuedbub";
const userKey = "hvgscsfdeff";

const storeInfo = (info) => {
  try {
    SecureStore.setItemAsync(key, info.toString());
  } catch (error) {
    console.log("Error Storing token", error);
  }
};

const storeUser = (uid) => {
  try {
    SecureStore.setItemAsync(userKey, uid);
  } catch (error) {
    console.log("Error Storing token", error);
  }
};

const getInfo = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error geting info", error);
  }
};

const getUser = async () => {
  try {
    return await SecureStore.getItemAsync(userKey);
  } catch (error) {
    console.log("Error geting info", error);
  }
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(userKey);
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error Removing User and info", error);
  }
};

export default {
  storeInfo,
  storeUser,
  getInfo,
  getUser,

  removeUser,
};
