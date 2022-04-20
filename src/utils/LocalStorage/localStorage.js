export const Storage = {
  getItemStorage() {
    let items = [JSON.parse(localStorage.getItem("items"))];
    return items;
  },
  setItemStorage(key, value) {
    localStorage.setItem(key, localStorage.getItem(key) + value);
  },
};
