//Strat Partners
Sponsors["Stratigic Partners"].forEach(element => {
    var temp = document.querySelector("#strat-partners").content.cloneNode(true);
    temp.querySelector(".card-title").textContent = element["title"]
    temp.querySelector(".card-text").textContent = element["desc"]
    temp.querySelector(".card-img-top").src = element["img"]
    temp.querySelector(".btn-primary").href = element["url"]
    document.querySelector("#strat-partners-cont").appendChild(temp);
});
//Platinum
Sponsors["Platinum Sponsors"].forEach(element => {
    var temp = document.querySelector("#plat").content.cloneNode(true);
    temp.querySelector(".card-title").textContent = element["title"]
    temp.querySelector(".card-text").textContent = element["desc"]
    temp.querySelector(".card-img-top").src = element["img"]
    temp.querySelector(".btn-primary").href = element["url"]
    document.querySelector("#plat-cont").appendChild(temp);
});
//Gold
Sponsors["Gold Sponsors"].forEach(element => {
    var temp = document.querySelector("#gold").content.cloneNode(true);
    temp.querySelector(".card-title").textContent = element["title"]
    temp.querySelector(".card-text").textContent = element["desc"]
    temp.querySelector(".card-img-top").src = element["img"]
    temp.querySelector(".btn-primary").href = element["url"]
    document.querySelector("#gold-cont").appendChild(temp);
});
//Gold
Sponsors["Silver Sponsors"].forEach(element => {
    var temp = document.querySelector("#silver").content.cloneNode(true);
    temp.querySelector(".card-title").textContent = element["title"]
    temp.querySelector(".card-text").textContent = element["desc"]
    temp.querySelector(".card-img-top").src = element["img"]
    temp.querySelector(".btn-primary").href = element["url"]
    document.querySelector("#silver-cont").appendChild(temp);
});
