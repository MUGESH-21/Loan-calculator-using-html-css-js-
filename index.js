function calculateLoan() {
    const loanAmount = document.getElementById('loan-amount').value;
    const interestRate = document.getElementById('interest-rate').value;
    const loanTerm = document.getElementById('loan-term').value;

    const interest = (loanAmount * (interestRate * 0.01)) / loanTerm;
    const monthlyPayment = (loanAmount / (loanTerm * 12)) + interest;

    document.getElementById('monthly-payment').innerText = `$${monthlyPayment.toFixed(2)}`;
}
