particlesJS("particles-js",{
  particles:{
    number:{value:80},
    size:{value:3},
    move:{speed:2}
  }
});

function toggleMode(){
  document.body.classList.toggle("light-mode");
}

window.addEventListener("scroll",()=>{
  document.querySelectorAll(".progress-bar").forEach(bar=>{
    bar.style.width = bar.getAttribute("data-width");
  });
});

function openModal(type){
  const modal = document.getElementById("certModal");
  const img = document.getElementById("modalImage");

  if(type==="aws"){
    img.src="aws-certificate.jpg";
  }
  if(type==="java"){
    img.src="java-certificate.jpg";
  }

  modal.style.display="flex";
}

function closeModal(){
  document.getElementById("certModal").style.display="none";
}