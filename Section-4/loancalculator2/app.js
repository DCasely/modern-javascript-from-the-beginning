const calculateBtn = document.getElementById('loan-form');
const loader = document.getElementById('loading');
const results = document.getElementById('results');
const interestField = document.getElementById('interest');
const amountField = document.getElementById('amount');
const yearsField = document.getElementById('years');
const reset = document.getElementById('reset');

// LISTEN FOR SUBMIT
calculateBtn.addEventListener('submit', delayResults);

// DELAY SHOWING RESULTS
function delayResults(e) {
  // Show the Loading Image
  loader.style.display = 'block';

  // Hide the Loading Image after 3 secs and Show Results
  setTimeout(function () {
    // Hide Loader
    loader.style.display = 'none';

    // Calculate & Show Results
    calculateResults(e);
    results.style.display = 'block';
    reset.style.display = 'block';
  }, 1500);

  e.preventDefault();
}

// CALCULATE RESULTS
function calculateResults(e) {
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

  // Clear error after delay
  setTimeout(clearError, 3000);
}

// CLEAR ERROR
function clearError() {
  document.querySelector('.alert').remove();
}

// RESET INITIAL STATE
reset.addEventListener('click', resetState);

function resetState() {
  loader.style.display = 'none';
  results.style.display = 'none';
  reset.style.display = 'none';
  amountField.value = '';
  interestField.value = '';
  yearsField.value = '';
}
