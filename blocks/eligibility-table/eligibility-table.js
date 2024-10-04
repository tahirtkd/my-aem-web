export default function decorate(block) {

    [...block.children].forEach((row, rowIndex) => {
        if (rowIndex === 0) {
            row.classList.add("eligibility-table-peragraph");
        }
        if (rowIndex === 1) {
            row.classList.add("eligibility-table-colums");
        }
        if (rowIndex === 2) {
            row.classList.add("eligibility-table-Disclaimer");
        }

    });
}

