// <<---- Promote a Link JS ----->>

// Grab node elements 'Buttons'
const createBtn = document.getElementById('btnCreate');

// Grab Form, elements 'Input, Select'
const getFormPromoteLink = document.getElementById('promoteLinkForm');
const getInputUrl = document.getElementById('urlInput');
const selectBrandTheme = document.getElementById('themeDropdown');

// Open Modal Dailog

const openModal = () => {
  const modal = document.getElementById('promoteModal');
  const overlay = document.getElementById('modalBackdrop');
  modal.classList.remove('d-none');
  overlay.classList.replace('d-none', 'd-block');
};

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

const populatePromoteCard = (formData) => {
  const protocolSelectDropdown = document.getElementById('protocolDropdown');
  const displayBrandName = document.getElementById('brandNameDisplay');
  const setProtocol = formData.url.startsWith('https://')
    ? 'https://'
    : 'http://';
  protocolSelectDropdown.value = setProtocol;
  displayBrandName.value = formData.theme;
  const sharePromotionLink = setProtocol + formData.url;
  openModal();
};

getFormPromoteLink.addEventListener('submit', (event) => {
  event.preventDefault();
  const urlValue = getInputUrl.value.trim();
  const themeValue =
    selectBrandTheme.options[selectBrandTheme.selectedIndex].text;
  const formData = {
    url: urlValue,
    theme: themeValue,
  };
  populatePromoteCard(formData);
});
