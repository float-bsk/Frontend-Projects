const textv3 = document.querySelectorAll(".details-v3");

textv3.forEach(element=>{    
    if(element.scrollHeight > element.clientHeight){
        const parent = element.closest(".testimonial-text-content-v3");
        parent.querySelector("a.readmore-link").style.display = "block";         
    }
})  