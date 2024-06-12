import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
    // Create a wrapper div with class 'interest-cards'
    const interestCardsDiv = document.createElement('div');
    interestCardsDiv.className = 'interest-cards';

    // Get the first row for the subtitle section
    const subtitleDiv = document.createElement('div');
    subtitleDiv.className = 'card-subtitel';

    const subtitleHeading = document.createElement('h1');
    subtitleHeading.className = 'subtitel-card-heading';
    subtitleHeading.textContent = block.children[0].children[0].textContent;

    const subtitleText = document.createElement('p');
    subtitleText.className = 'subtitel-card-text';
    subtitleText.textContent = block.children[0].children[1].textContent;

    subtitleDiv.append(subtitleHeading, subtitleText);
    interestCardsDiv.append(subtitleDiv);

    // Iterate over the remaining rows to create interest cards
    for (let i = 1; i < block.children.length; i++) {
        const row = block.children[i];
        const interestCardDiv = document.createElement('div');
        interestCardDiv.className = 'interest-card';

        const cardTitle = document.createElement('p');
        cardTitle.className = 'interest-card-titel';
        cardTitle.innerHTML = row.children[0].innerHTML; // Using innerHTML to handle multiline titles

        const cardHeading = document.createElement('h1');
        cardHeading.className = 'interest-card-headig';
        cardHeading.textContent = row.children[1].textContent;

        const cardParagraph = document.createElement('p');
        cardParagraph.className = 'interest-card-peragraph';
        cardParagraph.textContent = row.children[2].textContent;

        interestCardDiv.append(cardTitle, cardHeading, cardParagraph);
        interestCardsDiv.append(interestCardDiv);
    }

    // Replace block content with the new structure
    block.textContent = '';
    block.append(interestCardsDiv);
}
