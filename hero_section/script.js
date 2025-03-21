function redirectToPage() {
    let dropdown = document.getElementById("profitLossDropdown");
    let selectedValue = dropdown.value;

    // Check selected option and redirect accordingly
    if (selectedValue === "Revenue") {
        // window.location.href = "../models/revenue.html";  
        document.getElementById("myModal1").style.display = "flex";
    } else if (selectedValue === "Expenses") {
        // window.location.href = "../pnl/expenses.html"; 
        document.getElementById("myModal2").style.display = "flex";
    } else if (selectedValue === "Tax") {
        document.getElementById("myModal3").style.display = "flex"; 
    } else {
        alert("Please select a valid option!"); 
    }
    
}
