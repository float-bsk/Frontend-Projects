const text = document.querySelectorAll(".details-v1");

text.forEach(element=>{    
    if(element.scrollHeight > element.clientHeight){
        const parent = element.closest(".testimonial-text-content-v1");
        const l = parent?.querySelector("a.readmore-link");        
        l.style.display = "block"
    }
})