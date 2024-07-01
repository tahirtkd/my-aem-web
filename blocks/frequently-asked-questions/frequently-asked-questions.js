import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
    // Create frequently asked questions wrapper
    const faqWrapper = document.createElement('div');
    faqWrapper.className = 'frequently-asked-questions-wrapper';

    // Create frequently asked questions block
    const faqBlock = document.createElement('div');
    faqBlock.className = 'frequently-asked-questions block';
    faqBlock.setAttribute('data-block-name', 'frequently-asked-questions');
    faqBlock.setAttribute('data-block-status', 'loaded');

    // Create heading
    const headingDiv = document.createElement('div');
    headingDiv.className = 'frequently-asked-questions-heading';
    const heading = document.createElement('h1');
    heading.textContent = 'Frequently Asked Questions';
    headingDiv.appendChild(heading);

    // Create buttons container
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'frequently-asked-questions-buttons';

    // Extract all FAQs and create buttons
    const faqSections = block.querySelectorAll('.frequently-asked-questions.block > div');
    faqSections.forEach((section, index) => {
        if(index === 1){
        const questions = section.querySelectorAll('p');
        questions.forEach(question => {
            const button = document.createElement('button');
            button.className = 'frequently-asked-questions-button'; // Adjusted class name
            button.textContent = question.textContent;
            buttonsDiv.appendChild(button);
        });
    }
    });

    // Create paragraph
    const paragraphDiv = document.createElement('div');
    paragraphDiv.className = 'frequently-asked-questions-pera';
    const paragraph = document.createElement('p');
    paragraph.textContent = "Can’t find what you are looking for? View All";
    paragraphDiv.appendChild(paragraph);

    // Append all created elements to the FAQ block
    faqBlock.appendChild(headingDiv);
    faqBlock.appendChild(buttonsDiv);
    faqBlock.appendChild(paragraphDiv);

    // Append the FAQ block to the wrapper
    faqWrapper.appendChild(faqBlock);

    // Clear block content and append new content
    block.textContent = '';
    block.appendChild(faqWrapper);
}
