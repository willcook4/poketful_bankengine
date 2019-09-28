const json = require('./data/transactions.json');
const { data } = json;


const getWeeklyBills = () => {
    const weeklyBills = {}
    const expenses = data.filter(d => d.amount < 0);

    weeklyBills.rent = (expenses.filter(e => e.categories.includes("Rent")).map(e => e.amount).reduce((acc, curr) => acc += curr) / 3 / 4).toFixed(2);
    weeklyBills.telephone = (expenses.filter(e => e.categories.includes("Telephone")).map(e => e.amount).reduce((acc, curr) => acc += curr) / 3 / 4).toFixed(2);
    weeklyBills.electricity = (expenses.filter(e => e.categories.includes("Electricity")).map(e => e.amount).reduce((acc, curr) => acc += curr) / 3 / 4).toFixed(2);

    return weeklyBills;
}


export default getWeeklyBills;