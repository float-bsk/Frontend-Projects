# Backup File - CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Handjet:wght,ELSH@100..900,2&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Codystar:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bitcount+Prop+Double+Ink:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap');

*{
    font-family: 'Google sans Flex';    
}

/* BASE */
p{
    color: #1f1f1f;
    margin-top:0px;
    margin-bottom: 0px; 
}
a{
    margin-top:0px;
    margin-bottom: 0px;       
}

body{
    border:1px solid gray;
}

main{
    min-height: 54dvh;
}


.rubik-microbe-regular {
  font-family: "Rubik Microbe", system-ui;
  font-weight: 400;
  font-style: normal;
  color: orchid;
  font-size: large;
}

.gsf-normal {
  font-family: "Google Sans Flex", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "wdth" 100,
    "GRAD" 0,
    "ROND" 0;
}

.gsf-bold {
  font-family: "Google Sans Flex", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "wdth" 100,
    "GRAD" 0,
    "ROND" 0;
}

.handjet{
  font-family: "Handjet", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "ELGR" 1,
    "ELSH" 2;
}

.orbitron{
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight:400;
  font-style: normal;
}

.codystar-light {
  font-family: "Codystar", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.codystar-regular {
  font-family: "Codystar", sans-serif;
  font-weight: 400;
  font-style: normal;
  color:blue
}

.bitcount-prop-double-ink {
  font-family: "Bitcount Prop Double Ink", system-ui;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "CRSV" 0.5,
    "ELSH" 0,
    "ELXP" 0,
    "SZP1" 0,
    "SZP2" 0,
    "XPN1" 0,
    "XPN2" 0,
    "YPN1" 0,
    "YPN2" 0;
}
/* CONTENT */

.container{
    min-width: 25%;
    padding:1rem;
}

.bottomborder{
    border-bottom: 1px solid gray;
}

@media(width < 768px){
    .mobilebottomborder{
        border-bottom:1px solid gray;
    }
}

@media(width > 768px){
    .rightborder{
        border-right: 1px solid gray;
    }
}

.start-mobile-center{
    display: flex;   
    justify-content: flex-start;
}

.work-card{
    margin:0;
}

@media(max-width:768px){
   .start-mobile-center{
       flex-direction: column;      
   }
}

.container-header{
   display: flex;  
   flex-direction: column; 
   padding-left: 1rem;
   padding-right: 1rem;
   border-bottom: 1px solid gray;
}

img,h2{
    margin:6px;
}

.header-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.header-title > h2{
    margin:0px;
}

@media(width>768px){
.header-title{
     min-height: 12rem;
     margin-bottom: 0px;
}
}

.align-center{
     align-items: center;
}

.align-start{
    align-items: flex-start;
}

.filler{
 display: flex;
}


@media(width < 768px){
    .filler{
        display: none;        
    }
}

@media(width >= 768px){
    .filler{
        flex-grow: 1;        
    }
}

nav > ul {
    padding-left: 0;
    display: flex;
    flex-direction: row;
    gap:0.5rem;
    justify-content: center;
    align-items: center;
}

nav > ul > li {
    list-style: none;
    font-size: 12px;
}

@media(width > 768px){
  nav > ul > li {
    
    font-size: 16px;
}  
}

.review-card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:1rem;
    max-width: 326px;
    border: 1px solid black;
    border-radius: 2rem;
    margin:12px;
    min-height: 10rem;
}

.teacher{
    color: gray;
}

.footer-container{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding:1rem;
}

.form-container{
    display:flex;
    flex-direction: column;
    padding: 1rem;
    gap:1rem;
    border:1px solid gray;
    background-color: lightgray;
    max-width: 500px;
    margin:auto;
}

@media(width > 768px){
    .footer-container{
        min-height:10rem;
    }
}

@media(max-width:768px){
    .container-blue{
        padding:1rem;
        background-color: lightgray; 
    }
}

input{
    min-height:2rem;
}

.form-btn{
 max-width: 4rem;
 size: 4rem;
}
