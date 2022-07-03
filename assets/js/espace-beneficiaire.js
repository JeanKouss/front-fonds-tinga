let precentPrelev15 = document.getElementById("15-percent-prelev");
let with15Percent = document.querySelectorAll(".with-15-percent");
let precentPrelev15_2 = document.getElementById("15-percent-prelev2");
let with15Percent_2 = document.querySelectorAll(".with-15-percent2");
// All with15Percent elements must réact on hover with precentPrelev15.
// That is not done basicaly because precentPrelev15 is not in the same bloc ass with15Percents elements

// 1
precentPrelev15.addEventListener("mouseover", ()=>{
    for (let elem of with15Percent) {
        elem.classList.add("force-hover");
    }
});
precentPrelev15.addEventListener("mouseleave", ()=>{
    for (let elem of with15Percent) {
        elem.classList.remove("force-hover");
    }
});
for (let bloc of with15Percent) {
    bloc.addEventListener("mouseover", ()=>{
        precentPrelev15.classList.add("force-hover");
    });
    bloc.addEventListener("mouseleave", ()=>{
        precentPrelev15.classList.remove("force-hover");
    });
}
// 2
precentPrelev15_2.addEventListener("mouseover", ()=>{
    for (let elem of with15Percent_2) {
        elem.classList.add("force-hover");
    }
});
precentPrelev15_2.addEventListener("mouseleave", ()=>{
    for (let elem of with15Percent_2) {
        elem.classList.remove("force-hover");
    }
});

for (let bloc of with15Percent_2) {
    bloc.addEventListener("mouseover", ()=>{
        precentPrelev15_2.classList.add("force-hover");
    });
    bloc.addEventListener("mouseleave", ()=>{
        precentPrelev15_2.classList.remove("force-hover");
    });
}