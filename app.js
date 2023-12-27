const observer = new IntersectionObserver(
(entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log(entry);
      entry.target.classList.add("show")
    }
    else{
      entry.target.classList.remove("show")
    }
  });
});
const boxs = document.querySelectorAll(".container div");
boxs.forEach((box)=>{observer.observe(box)})