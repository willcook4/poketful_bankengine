const json = require("./data/transactions.json");
const { data } = json;

const getWeeklyBills = () => {
  const weeklyBills = [];
  const expenses = data.filter(d => d.amount < 0);

  const billTypes = ["Rent", "Telephone", "Electricity"];

  const getIcon = expenseType => {
    switch (expenseType) {
      case "Electricity":
        return "fas fa-bolt fa-fw";

      case "Telephone":
        return "fas fa-phone fa-fw";

      case "Rent":
        return "fas fa-home fa-fw";

      default:
        return "file-invoice-dollar fa-fw";
    }
  };

  billTypes.forEach(value => {
    weeklyBills.push({
      type: value,
      icon: getIcon(value),
      description: "Per Week",
      amt:
        (
          expenses
            .filter(e => e.categories.includes(value))
            .map(e => e.amount)
            .reduce((acc, curr) => (acc += curr)) /
          3 /
          4
        ).toFixed(0) * -1
    });
  });

  return weeklyBills;
};

export default getWeeklyBills;
