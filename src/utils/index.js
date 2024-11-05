export function saveNewCurrency(code) {
  //   if (window.VuexStore && window.VuexStore.hasModule("settings") === true) {
  //     If Vuex is loaded, update it to keep Vue in line with cookie below
  //     window.VuexStore.commit("settings/setCurrency", code);
  //   }

  window.update_currency(code);
  window.update_currency_selector();
  //   closeAnyDrawer("mobileCurrencySelector");
  // Available from drawer-js
}

export const capitalizeFirstLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const capitalizeFirstLetterOfWords = (words) =>
  words
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
