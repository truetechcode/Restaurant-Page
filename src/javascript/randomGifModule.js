const RandomGifModule = (() => {
  const mod = {}
  mod.randomGif = (img) => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=AyTTlhvK8Si7arhTODUAmdaNt9YXCcsu&s=food', {mode: 'cors'})
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      img.src = response.data.images.original.url
    })
    .catch((error) => {
      console.error(error);
    })
  }
  return mod;
})();


export { RandomGifModule };