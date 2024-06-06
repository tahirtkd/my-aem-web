export default function decorate(block) {
    // Create table, colgroup, and tbody elements
    const table = document.createElement('table');
    table.setAttribute("border", "1");
    const colgroup = document.createElement('colgroup');
    const col1 = document.createElement('col');
    const col2 = document.createElement('col');
    const tbody = document.createElement('tbody');

    // Set column widths
    col1.setAttribute('width', '296');
    col2.setAttribute('width', '312');
    colgroup.append(col1, col2);

    // Append colgroup to table
    table.append(colgroup);

    // Create first row for the title
    const titleRow = document.createElement('tr');
    const titleCell = document.createElement('td');
    titleCell.setAttribute('colspan', '2');
    const titleP = document.createElement('p');
    titleP.textContent = 'table-tahir';
    titleCell.append(titleP);
    titleRow.append(titleCell);
    tbody.append(titleRow);

    // Create rows from block children
    [...block.children].forEach((row) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        // Populate first cell
        const firstDiv = row.children[0];
        while (firstDiv.firstElementChild) td1.append(firstDiv.firstElementChild);
        td1.innerHTML += '<br>'; // Add a break line at the end of the first cell

        // Populate second cell
        const secondDiv = row.children[1];
        while (secondDiv.firstElementChild) td2.append(secondDiv.firstElementChild);

        // Append cells to row
        tr.append(td1, td2);
        tbody.append(tr);
    });

    // Append tbody to table
    table.append(tbody);

    // Clear block content and append table
    block.textContent = '';
    block.append(table);
}
