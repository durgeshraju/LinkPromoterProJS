// <<---- Promote a Link JS ----->>

// Grab node elements 'Buttons'
const createBtn = document.getElementById('btnCreate');

// Grab Form, elements 'Input, Select'
const getFormPromoteLink = document.getElementById('promoteLinkForm');
const getInputUrl = document.getElementById('urlInput');
const selectBrandTheme = document.getElementById('themeDropdown');

// Function to check if both input and select conditions are met
const checkFormValidity = () => {
  const inputUrlValue = getInputUrl.value.trim(); // Get trimmed value of the input
  const selectValue = selectBrandTheme.value; // Get selected option value

  // Check conditions: input is not empty and select option is not the placeholder
  if (inputUrlValue.length > 0 && selectValue !== '') {
    createBtn.disabled = false; // Enable the 'Create' button
  } else {
    createBtn.disabled = true; // Disable the 'Create' button
  }
};

// Add event listeners to input and select elements
getInputUrl.addEventListener('input', checkFormValidity);
selectBrandTheme.addEventListener('change', checkFormValidity);

// Initial check in case the form is pre-filled or for browser auto-fill
checkFormValidity();
