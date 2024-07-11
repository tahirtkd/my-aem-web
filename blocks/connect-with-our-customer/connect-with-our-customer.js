// export default function decorate(block) {
//     const connectwithourcustomer = document.createElement('div');
//     connectwithourcustomer.className = 'connect-with-our-customer-heading';
// }
export default function decorate(block) {

    [...block.children].forEach((row, rowIndex) => {
        row.classList.add("connect-with-our-customer-heading");

        if (rowIndex === 1) {
            row.className = "connect-with-our-customer-cards"
        }
        if (rowIndex === 2) {
            row.className = "connect-with-our-customer-link"
        }


    });
}
