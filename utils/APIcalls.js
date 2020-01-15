const key = process.env.VUE_APP_API_KEY
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

export const getThisMonthPics = () => {
  let date = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1 ).padStart(2, '0')}-01`;

  return fetch(`${baseUrl}&start_date=${date}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
      