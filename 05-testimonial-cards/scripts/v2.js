const textv2 = document.querySelectorAll(".details-v2");

textv2.forEach(element=>{    
    if(element.scrollHeight > element.clientHeight){
        const parent = element.closest(".testimonial-text-content-v2");
        parent.querySelector("a.readmore-link").style.display = "block";         
    }
})  