const json = require('./data/transactions.json');
const {data} = json;
const bills = {}

const expenses = data.filter(d => d.amount < 0);

bills.rent = expenses.filter(e => e.categories.includes("Rent"));
bills.telephone = expenses.filter(e => e.categories.includes("Telephone"));
bills.electricity = expenses.filter(e => e.categories.includes("Electricity"));

export default bills;