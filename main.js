
document.querySelector(".bold").addEventListener("click",(e) => {
    e.target.classList.toggle("active");
    document.getElementById("text").classList.toggle("font-weight");
    
});

document.querySelector(".italic").addEventListener("click",(e) => {
    e.target.classList.toggle("active");
    document.getElementById("text").classList.toggle("italic");
    
});


document.getElementById("color").addEventListener("input",(e) => {
    document.getElementById("text").style.color = e.target.value;
});


document.getElementById("size").addEventListener("change",(e) => {
    const size = e.target.value;
    document.getElementById("text").style.fontSize = `${size}px`;
});


document.getElementById("text-trans").addEventListener("change",(e) => {
    const value = e.target.value;
    document.getElementById("text").style.textTransform = `${value}`;
});