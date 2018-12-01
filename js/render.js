const db_pre19c = [
    {
        id: 1,
        title: "hzytql",
        year: "2015",
        description: "洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了洪志远太强了",
        colors: ["red", "orange", "dodgerblue", "greenyellow", "purple"],
    }
];

const db_19c = [
    {
        id: 1,
        title: "hzytql",
        year: "2016",
        description: "",
        colors: ["red", "orange", "dodgerblue", "greenyellow", "purple"],
    }
];

const db_20c = [
    {
        id: 1,
        title: "hzytql",
        year: "2017",
        description: "",
        colors: ["red", "orange", "dodgerblue", "greenyellow", "purple"],
    }
];

const db_21c = [
    {
        id: 1,
        title: "hzytql",
        year: "2018",
        description: "",
        colors: ["red", "orange", "dodgerblue", "greenyellow", "purple"],
    }
];

class Render {
    constructor(){
        this.db = [db_pre19c, db_19c, db_20c, db_21c];
    }
    db_find(index, id){
        return this.db[index][Number.parseInt(id) - 1];
    }
    static centuryToString(id){
        let rtn = "pre19c";
        switch(id){
            case "0": rtn = "pre19c";break;
            case "1": rtn = "19c";break;
            case "2": rtn = "20c";break;
            case "3": rtn = "21c";break;
        }
        return rtn;
    }
    static render_url_get(paraName){
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
        }
        else {
            return "";
        }
    }
}