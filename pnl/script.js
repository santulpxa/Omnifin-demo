function calculateProfitLoss() {
    function getPositiveNumber(id) {
        let value = parseFloat(document.getElementById(id).value) || 0;
        return value < 0 ? 0 : value;
    }

    let totalIncome = getPositiveNumber("revenue") + getPositiveNumber("otherIncome");
    document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);

    let totalExpenses = [
        "materialsCost", "inventoryChange", "cogs", 
        "employeeExpense", "depreciation", "financeCost", "otherExpense"
    ].map(getPositiveNumber).reduce((a, b) => a + b, 0);
    
    document.getElementById("totalExpenses").textContent = totalExpenses.toFixed(2);

    let profitBeforeTax = totalIncome - totalExpenses;
    document.getElementById("profitBeforeTax").textContent = profitBeforeTax.toFixed(2);

    let netProfit = profitBeforeTax - getPositiveNumber("taxExpense");
    document.getElementById("netProfit").textContent = netProfit.toFixed(2);
}
