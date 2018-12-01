let scroll_obj = [
    document.getElementById("pre_19c"),
    document.getElementById("19c"),
    document.getElementById("20c"),
    document.getElementById("21c"),
];
let nav_obj = [
    document.getElementById("nav_pre19c"),
    document.getElementById("nav_19c"),
    document.getElementById("nav_20c"),
    document.getElementById("nav_21c"),
];

const ScrollTop = (number = 0, time) => {
    if (!time) {
        document.body.scrollTop = document.documentElement.scrollTop = number;
        return number;
    }
    const spacingTime = 20;
    let spacingInex = time / spacingTime;
    let nowTop = document.body.scrollTop + document.documentElement.scrollTop;
    let everTop = (number - nowTop) / spacingInex;
    let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
            spacingInex--;
            ScrollTop(nowTop += everTop);
        } else {
            clearInterval(scrollTimer);
        }
    }, spacingTime);
};

window.addEventListener("load", function () {
    for (let nav of nav_obj) {
        nav.addEventListener("click", (e) => {
            let index = e.target.dataset.index;
            ScrollTop(scroll_obj[index].offsetTop - 56, 200);
        });
    }
});
