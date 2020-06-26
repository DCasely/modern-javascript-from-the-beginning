const calculateBtn = document.getElementById('loan-form');

// LISTEN FOR SUBMIT
calculateBtn.addEventListener('submit', calculateResults);

// CALCULATE RESULTS
function calculateResults(e) {
  console.log('Calculating...');
  //   UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // Variables for Calculations
  const principal = Number(amount.value);
  const calculatedInterest = Number(interest.value) / 100 / 12;
  const calculatedPayments = Number(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();
}

// SHOW ERROR
function showError(error) {
  // Create a div
  const errorDiv = document.createElement('div');

  // Get Elements
  const card = document.querySelector('.card');
  const form = document.querySelector('#loan-form');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, form);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// CLEAR ERROR
function clearError() {
  document.querySelector('.alert').remove();
}
