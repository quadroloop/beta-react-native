// import SyncStorage from "sync-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const persistData = (key, value) => {
  try {
    AsyncStorage.setItem(key, value);
    console.log("peristed data");
  } catch (error) {
    // Error retrieving data
    console.log("Utils: error persisting data");
  }
};

export const guid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
