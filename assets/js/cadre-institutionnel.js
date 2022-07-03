// Pour le déroulement des détails sur les organes
let detailsToUnroll = document.querySelectorAll(".details-organes");

const detailsResizeObserver = new ResizeObserver((entries)=>{
    entries.forEach((entry)=>{
        computeUnrollment(entry.target);
    });
});

function computeUnrollment(detailsDiv) {
    let finalHeight = 0
    if (detailsDiv.classList.contains("open")) {
        finalHeight=20
        for (let node of detailsDiv.childNodes) {
            if (node.nodeName != "#text") {
                finalHeight += node.clientHeight
            }
        }
        
    }
    detailsDiv.style.height = ""+finalHeight+"px";
}

for (let detail of detailsToUnroll) {
    detail.querySelector("h2").addEventListener("click", ()=>{
        detail.querySelector("div").classList.toggle("open");
        detail.querySelector("h2").classList.toggle("div-opened")
        computeUnrollment(detail.querySelector("div"));
    });
    detailsResizeObserver.observe(detail.querySelector("div"));
}