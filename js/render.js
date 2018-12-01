const db_pre19c = [
    {
        id: 1,
        title: "hzytql",
        year: "2015",
        description: "hzytql",
        colors: ["#d3a395", "#e3b8a8", "#b67281", "#d8a39d", "#aa3126"],
    }, {
        id: 2,
        title: "hzytql",
        year: "2015",
        description: "hzytql",
        colors: ["#d07b82", "#bf6461", "#d9ac95", "#daa796", "#c97a75"],
    }, {
        id: 3,
        title: "hzytql",
        year: "2015",
        description: "hzytql",
        colors: ["#89443d", "#987360", "#ad5e3f", "#942900", "#7c312e"],
    }
];

const db_19c = [
    {
        id: 1,
        title: "hzytql",
        year: "2016",
        description: "",
        colors: ["#b54746", "#e6a98a", "#d68e76", "#b06256", "#dc2e25"],
    }, {
        id: 2,
        title: "hzytql",
        year: "2016",
        description: "",
        colors: ["#e87769", "#efab96", "#c16c58", "#e7a686", "#a97277"],
    }, {
        id: 3,
        title: "hzytql",
        year: "2016",
        description: "",
        colors: ["#b7e68", "#f8decd", "#f89b8c", "#e1a79c", "#e1856c"],
    }
];

const db_20c = [
    {
        id: 1,
        title: "hzytql",
        year: "2017",
        description: "",
        colors: ["#7c5158", "#734144", "#a98e87", "#c9949a", "#cbaac9"],
    }, {
        id: 2,
        title: "hzytql",
        year: "2017",
        description: "",
        colors: ["#ea8d6c", "#f41b23", "#d48a71", "#d57569", "#c9867d"],
    }, {
        id: 3,
        title: "hzytql",
        year: "2017",
        description: "",
        colors: ["#a6847a", "#dfc0ae", "#faa199", "#e28381", "#e05858"],
    }
];

const db_21c = [
    {
        id: 1,
        title: "hzytql",
        year: "2018",
        description: "",
        colors: ["#d6a6a2", "#f8988c", "#90312d", "#e9c4b1", "#aa603b"],
    },{
        id: 2,
        title: "hzytql",
        year: "2018",
        description: "",
        colors: ["#ffd5cd", "#f26c6d", "#d78e99", "#fd8284", "#f5bec3"],
    },{
        id: 3,
        title: "hzytql",
        year: "2018",
        description: "",
        colors: ["#d290b6", "#b53363", "#c95181", "#fc8be5", "#dd3280"],
    }
];

class Render {
    constructor() {
        this.db = [db_pre19c, db_19c, db_20c, db_21c];
    }

    db_find(index, id) {
        return this.db[index][Number.parseInt(id) - 1];
    }

    static centuryToString(id) {
        let rtn = "pre19c";
        switch (id) {
            case "0":
                rtn = "pre19c";
                break;
            case "1":
                rtn = "19c";
                break;
            case "2":
                rtn = "20c";
                break;
            case "3":
                rtn = "21c";
                break;
        }
        return rtn;
    }

    static renderUrlGet(paraName) {
        var url = document.location.toString();
        var arrObj = url.split("?");
        if (arrObj.length > 1) {
            var arrPara = arrObj[1].split("&");
            var arr;
            for (var i = 0; i < arrPara.length; i++) {
                arr = arrPara[i].split("=");
                if (arr != null && arr[0] === paraName) {
                    return arr[1];
                }
            }
            return "";
        } else {
            return "";
        }
    }
}