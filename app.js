const person = document.querySelector(".person"),
    mouth = document.querySelector(".mouth"); 



person.addEventListener("mouseover", function(e) {
    mouth.style.transform = 'rotate(10deg)';
    // person.style.transform = 'scale(0.98)';
});
person.addEventListener("mouseout", function(e) {
    mouth.style.transform = 'rotate(0deg)';
});