export let uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substring(2);
  return dateString + randomness;
};

export let firstUppercase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export let validateData = (data) => {
  validateRow();
}

export let validateRow = (row) => {

}