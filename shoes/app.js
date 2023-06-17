const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem")


menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log("clicked" + index);
        wrapper.style.transform = `translateX(${-100 * index}vw)`;  
    });
});