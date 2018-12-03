let jmore_ul = document.getElementById("more_ul");
let doing = false;

function moreOnClick(target) {
    let dir = target.dataset.dir;
    if (dir === "none") return false;
    if (doing) return false;
    doing = true;
    let toCenter = target;
    let toLeft, toRight;
    for (let _li of jmore_ul.children) {
        let _dir = _li.dataset.dir;
        if (_dir === dir) continue;
        switch (_dir) {
            case "left":
                toRight = _li;
                break;
            case "right":
                toLeft = _li;
                break;
            case "none":
                if (dir === "left") {
                    toRight = _li;
                } else if (dir === "right") {
                    toLeft = _li;
                }
                break;
        }
    }
    toLeft.style.left = "0";
    toLeft.classList.remove("more_container_active");
    toLeft.classList.add("more_container_noactive");
    toRight.style.left = "40vw";
    toRight.classList.remove("more_container_active");
    toRight.classList.add("more_container_noactive");
    toCenter.style.left = "20vw";
    toCenter.classList.add("more_container_active");
    toCenter.classList.remove("more_container_noactive");
    toLeft.dataset.dir = "left";
    toRight.dataset.dir = "right";
    toCenter.dataset.dir = "none";
    doing = false;
}