import { createOptimizedPicture } from '../../scripts/aem.js';

const handleTabClick = (e) => {
    const clickedButton = e.target;
    document.querySelectorAll('.documents-cards-button').forEach((button) => {
        button.classList.remove("active");
    });
    clickedButton.classList.add("active");
    const btnText = clickedButton.textContent.toLowerCase().split(" ").join("-");


    document.querySelectorAll(".document-description").forEach((descriptioncard) => {
        descriptioncard.classList.remove("show-description");

    });
    document.querySelector("." + btnText).classList.add("show-description");


}


export default function decorate(block) {


    const keyDocumentsContainer = document.createElement('div');
    keyDocumentsContainer.className = 'documents-cards-head';

    [...block.children].forEach((row, rowIndex) => {

        if (rowIndex === 0) { // first row is for buttons
            const keyDocumentsRow = document.createElement('div');
            keyDocumentsRow.className = 'documents-cards-row';

            [...row.children].forEach((cel) => {
                if (cel.textContent) {
                    const keyDocumentButton = document.createElement('button');
                    keyDocumentButton.className = 'documents-cards-button';
                    keyDocumentButton.innerHTML = cel.textContent;
                    // const buttonAnchor = cel.querySelector("a");
                    // const buttonLink = buttonAnchor?.getAttribute("href");
                    // if (buttonLink) {
                    //    keyDocumentButton.setAttribute("data-tab-id", buttonLink)
                    // }
                    keyDocumentButton.addEventListener('click', handleTabClick);
                    keyDocumentsRow.appendChild(keyDocumentButton);
                }
            });
            keyDocumentsContainer.appendChild(keyDocumentsRow);
        }

        if (rowIndex === 1) { // second row is for dropdown selection
            const residentTypeDropdownContainer = document.createElement('div');
            residentTypeDropdownContainer.className = 'resident-type-dropdown-container';

            const residentTypeDropdown = document.createElement('select');
            residentTypeDropdown.className = 'resident-type-dropdown';
            [...row.children].forEach((cel) => {
                const residentTypeOption = document.createElement('option');
                residentTypeOption.className = 'documents-cards-option';
                residentTypeOption.innerHTML = cel.textContent;

                residentTypeDropdown.appendChild(residentTypeOption);
            });
            residentTypeDropdownContainer.appendChild(residentTypeDropdown);
            keyDocumentsContainer.appendChild(residentTypeDropdownContainer);
        }

    });

    block.innerHTML = '';
    block.append(keyDocumentsContainer);
}



