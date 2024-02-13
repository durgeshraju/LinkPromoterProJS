// <<---- Promote a Link JS ----->>

// Grab node elements 'Buttons'
const createBtn = document.getElementById('btnCreate');

// Grab Form, elements 'Input, Select'
const getFormPromoteLink = document.getElementById('promoteLinkForm');
const getInputUrl = document.getElementById('urlInput');
const selectBrandTheme = document.getElementById('themeDropdown');
selectBrandTheme.addEventListener('change', (event) => {
  console.log(event.target.value == 0);
});

// Validate Form

const validateForm = () => {
  let isUrlValid = getInputUrl.value.trim().length > 0;
  let isThemeSelected = selectBrandTheme.value !== '';
  createBtn.disabled = !(isUrlValid && isThemeSelected);
};

getInputUrl.addEventListener('input', validateForm);
getInputUrl.addEventListener('change', validateForm);

validateForm();
