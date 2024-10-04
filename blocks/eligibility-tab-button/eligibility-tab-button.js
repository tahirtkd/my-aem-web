export default function decorate(block) {

    [...block.children].forEach((row, rowIndex) => {
        if(rowIndex ===0){
        row.classList.add("eligibility-tab-buttons-heding");
        }
        if (rowIndex === 1) {
            row.classList.add("eligibility-tab-buttons");
            [...row.children].forEach((tab) => {
                tab.classList.add("tab-buttons");
            })
        }
     
    });
}

// const handleTabClick = (e) => {
//     const clickedButton = e.target;
//     document.querySelectorAll('.tabe-buttons').forEach((button) => {
//         button.classList.remove("active");
//     });
//     clickedButton.classList.add("active");
//     const btnText = clickedButton.textContent.toLowerCase().split(" ").join("-");


//     document.querySelectorAll(".tabe-buttons").forEach((descriptioncard) => {
//         descriptioncard.classList.remove("show-description");

//     });
//     document.querySelector("." + btnText).classList.add("show-description");


// }