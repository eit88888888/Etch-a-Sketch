const n = 16;
const container = document.querySelector("#container");
const newCanvaBtn = document.querySelector("#newCanva");

function createCanva(n){
    for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
        for (let j = 0; j < n; j++) {
            // Canva need to be same size(350px).
            const pixel = document.createElement("div");
            pixel.style.height = 350/n + "px";
            pixel.classList.add("pixel");
            row.appendChild(pixel);

            // Change class if pixel hovered.
            pixel.addEventListener(
            "mouseover",
            (event) => {
                pixel.classList.add("black");
                }
            )
        }
}
}
createCanva(n);
newCanvaBtn.addEventListener(
    "click",
    (event) => {
        container.innerHTML = "";
        const msg = document.querySelector("#msg");
        msg.textContent = "";
        let n = prompt("Enter size of your canva. For Example 16.");
        if( parseInt(n) && n > 0 && n < 100) {
            createCanva(n);
        } else {
            const msg = document.querySelector("#msg");
            msg.textContent = "Enter numbers only!"
        }
        
    }
)



