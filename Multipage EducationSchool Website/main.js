// change navbar style on scroll
window.addEventListener('scroll',()=>{
document.querySelector('nav').classList.toggle
('window-scroll',window.scrollY>0);

})



// show/hide feq answare
const faqs=document.querySelectorAll(".faq");
faqs.forEach(faq=>{

faq.addEventListener('click',()=>{

    faq.classList.toggle('open');

    // change icon
  const icon=faq.querySelector('.faq_icon i');
  if(icon.className==="fa-thin fa-plus"){
    icon.className="fa-solid fa-minus";

  }
else{
    icon.className="fa-thin fa-plus";

}

})

})


