export const getLocalStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    // if the item does'n exist, return null
    return null;
  }
};

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // if the item does'n exist, return null
    return null;
  }
};
