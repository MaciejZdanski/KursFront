const images = [
    {
      name: 'Photo1',
      src: '1.webp'
    },
    {
      name: 'Photo2',
      src: '2.webp'
    },
    {
      name: 'Photo3',
      src: '3.webp'
    }
  ]

  function showSlide(slideNr){
    const img = document.querySelector(".carousel .image")
    img.src = "photo/"+images[slideNr].src
    img.alt = images[slideNr].name
    document.querySelector('.carousel .title').innerText = images[slideNr].name
  }
  showSlide(0)
  console.log(images)
  let currentSlide = 0;

  function changeSlide(side) {
    if(side == 'right'){
      currentSlide++
      if(currentSlide == images.length){
        currentSlide = 0
      }
    }
    else{
      currentSlide--
      if(currentSlide < 0){
        currentSlide = images.length-1
      }
    }
    showSlide(currentSlide)
  }
  
  document.querySelector(".left").addEventListener("click", () => {
    changeSlide('left')
  })
  document.querySelector(".right").addEventListener("click", () => {
    changeSlide('right')
  })