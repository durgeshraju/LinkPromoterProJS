// <<---- Promote a Link JS ----->>

// Grab node elements 'Buttons'
const createBtn = document.getElementById('btnCreate');

// Grab Form, elements 'Input, Select'
const getFormPromoteLink = document.getElementById('promoteLinkForm');
const getInputUrl = document.getElementById('urlInput');
const selectBrandTheme = document.getElementById('themeDropdown');

// Grab Modal Dailog Nodes
const closeDialogBtn = document.querySelectorAll('.close-dialog');
const modal = document.getElementById('promoteModal');
const overlay = document.getElementById('modalBackdrop');

// Open Modal Dailog
const openModal = () => {
  modal.classList.replace('d-none', 'd-block');
  overlay.classList.replace('d-none', 'd-block');
};

const closeModal = () => {
  closeDialogBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (event) => {
      if (event.target) {
        modal.classList.replace('d-block', 'd-none');
        overlay.classList.replace('d-block', 'd-none');
      }
    });
  });
};

// URL Regex pattren for the validation
function isValidUrl(urlString) {
  const pattern =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return pattern.test(urlString);
}

// Hide and Show Error Message

const showErrorMessage = () => {};

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

  if (!isValidUrl(formData.url)) {
    return;
  }

  protocolSelectDropdown.value = setProtocol;
  displayBrandName.value = formData.theme;
  const cleanUrl = formData.url.replace(/^https?:\/\//, ''); // Remove 'http://' or 'https://'
  const sharePromotionLink = setProtocol + cleanUrl;
  console.log(sharePromotionLink);
  openModal();
  closeModal();
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
  if (isValidUrl(formData.url)) {
    populatePromoteCard(formData);
  } else {
    let urlErrorMessage = document.getElementById('urlErrorMessage');
    urlErrorMessage.classList.remove('d-none');
  }
});
