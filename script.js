const viewers = document.querySelectorAll(".compare");
  
viewers.forEach((element) => {
  let view = new ImageCompare(element).mount();
});
