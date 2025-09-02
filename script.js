// Countries with phone codes
const countries = [
    { name: "Afghanistan", code: "+93" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "American Samoa", code: "+1" },
    { name: "Andorra", code: "+376" },
    { name: "Angola", code: "+244" },
    { name: "Anguilla", code: "+1" },
    { name: "Antarctica", code: "+672" },
    { name: "Antigua and Barbuda", code: "+1" },
    { name: "Argentina", code: "+54" },
    { name: "Armenia", code: "+374" },
    { name: "Aruba", code: "+297" },
    { name: "Australia", code: "+61" },
    { name: "Austria", code: "+43" },
    { name: "Azerbaijan", code: "+994" },
    { name: "Bahamas", code: "+1" },
    { name: "Bahrain", code: "+973" },
    { name: "Bangladesh", code: "+880" },
    { name: "Barbados", code: "+1" },
    { name: "Belarus", code: "+375" },
    { name: "Belgium", code: "+32" },
    { name: "Belize", code: "+501" },
    { name: "Benin", code: "+229" },
    { name: "Bermuda", code: "+1" },
    { name: "Bhutan", code: "+975" },
    { name: "Bolivia", code: "+591" },
    { name: "Bosnia and Herzegovina", code: "+387" },
    { name: "Botswana", code: "+267" },
    { name: "Brazil", code: "+55" },
    { name: "British Indian Ocean Territory", code: "+246" },
    { name: "British Virgin Islands", code: "+1" },
    { name: "Brunei", code: "+673" },
    { name: "Bulgaria", code: "+359" },
    { name: "Burkina Faso", code: "+226" },
    { name: "Burundi", code: "+257" },
    { name: "Cambodia", code: "+855" },
    { name: "Cameroon", code: "+237" },
    { name: "Canada", code: "+1" },
    { name: "Cape Verde", code: "+238" },
    { name: "Cayman Islands", code: "+1" },
    { name: "Central African Republic", code: "+236" },
    { name: "Chad", code: "+235" },
    { name: "Chile", code: "+56" },
    { name: "China", code: "+86" },
    { name: "Christmas Island", code: "+61" },
    { name: "Cocos Islands", code: "+61" },
    { name: "Colombia", code: "+57" },
    { name: "Comoros", code: "+269" },
    { name: "Cook Islands", code: "+682" },
    { name: "Costa Rica", code: "+506" },
    { name: "Croatia", code: "+385" },
    { name: "Cuba", code: "+53" },
    { name: "Curacao", code: "+599" },
    { name: "Cyprus", code: "+357" },
    { name: "Czech Republic", code: "+420" },
    { name: "Democratic Republic of the Congo", code: "+243" },
    { name: "Denmark", code: "+45" },
    { name: "Djibouti", code: "+253" },
    { name: "Dominica", code: "+1" },
    { name: "Dominican Republic", code: "+1" },
    { name: "East Timor", code: "+670" },
    { name: "Ecuador", code: "+593" },
    { name: "Egypt", code: "+20" },
    { name: "El Salvador", code: "+503" },
    { name: "Equatorial Guinea", code: "+240" },
    { name: "Eritrea", code: "+291" },
    { name: "Estonia", code: "+372" },
    { name: "Ethiopia", code: "+251" },
    { name: "Falkland Islands", code: "+500" },
    { name: "Faroe Islands", code: "+298" },
    { name: "Fiji", code: "+679" },
    { name: "Finland", code: "+358" },
    { name: "France", code: "+33" },
    { name: "French Polynesia", code: "+689" },
    { name: "Gabon", code: "+241" },
    { name: "Gambia", code: "+220" },
    { name: "Georgia", code: "+995" },
    { name: "Germany", code: "+49" },
    { name: "Ghana", code: "+233" },
    { name: "Gibraltar", code: "+350" },
    { name: "Greece", code: "+30" },
    { name: "Greenland", code: "+299" },
    { name: "Grenada", code: "+1" },
    { name: "Guam", code: "+1" },
    { name: "Guatemala", code: "+502" },
    { name: "Guernsey", code: "+44" },
    { name: "Guinea", code: "+224" },
    { name: "Guinea-Bissau", code: "+245" },
    { name: "Guyana", code: "+592" },
    { name: "Haiti", code: "+509" },
    { name: "Honduras", code: "+504" },
    { name: "Hong Kong", code: "+852" },
    { name: "Hungary", code: "+36" },
    { name: "Iceland", code: "+354" },
    { name: "India", code: "+91" },
    { name: "Indonesia", code: "+62" },
    { name: "Iran", code: "+98" },
    { name: "Iraq", code: "+964" },
    { name: "Ireland", code: "+353" },
    { name: "Isle of Man", code: "+44" },
    { name: "Israel", code: "+972" },
    { name: "Italy", code: "+39" },
    { name: "Ivory Coast", code: "+225" },
    { name: "Jamaica", code: "+1" },
    { name: "Japan", code: "+81" },
    { name: "Jersey", code: "+44" },
    { name: "Jordan", code: "+962" },
    { name: "Kazakhstan", code: "+7" },
    { name: "Kenya", code: "+254" },
    { name: "Kiribati", code: "+686" },
    { name: "Kosovo", code: "+383" },
    { name: "Kuwait", code: "+965" },
    { name: "Kyrgyzstan", code: "+996" },
    { name: "Laos", code: "+856" },
    { name: "Latvia", code: "+371" },
    { name: "Lebanon", code: "+961" },
    { name: "Lesotho", code: "+266" },
    { name: "Liberia", code: "+231" },
    { name: "Libya", code: "+218" },
    { name: "Liechtenstein", code: "+423" },
    { name: "Lithuania", code: "+370" },
    { name: "Luxembourg", code: "+352" },
    { name: "Macau", code: "+853" },
    { name: "Macedonia", code: "+389" },
    { name: "Madagascar", code: "+261" },
    { name: "Malawi", code: "+265" },
    { name: "Malaysia", code: "+60" },
    { name: "Maldives", code: "+960" },
    { name: "Mali", code: "+223" },
    { name: "Malta", code: "+356" },
    { name: "Marshall Islands", code: "+692" },
    { name: "Mauritania", code: "+222" },
    { name: "Mauritius", code: "+230" },
    { name: "Mayotte", code: "+262" },
    { name: "Mexico", code: "+52" },
    { name: "Micronesia", code: "+691" },
    { name: "Moldova", code: "+373" },
    { name: "Monaco", code: "+377" },
    { name: "Mongolia", code: "+976" },
    { name: "Montenegro", code: "+382" },
    { name: "Montserrat", code: "+1" },
    { name: "Morocco", code: "+212" },
    { name: "Mozambique", code: "+258" },
    { name: "Myanmar", code: "+95" },
    { name: "Namibia", code: "+264" },
    { name: "Nauru", code: "+674" },
    { name: "Nepal", code: "+977" },
    { name: "Netherlands", code: "+31" },
    { name: "Netherlands Antilles", code: "+599" },
    { name: "New Caledonia", code: "+687" },
    { name: "New Zealand", code: "+64" },
    { name: "Nicaragua", code: "+505" },
    { name: "Niger", code: "+227" },
    { name: "Nigeria", code: "+234" },
    { name: "Niue", code: "+683" },
    { name: "North Korea", code: "+850" },
    { name: "Northern Mariana Islands", code: "+1" },
    { name: "Norway", code: "+47" },
    { name: "Oman", code: "+968" },
    { name: "Pakistan", code: "+92" },
    { name: "Palau", code: "+680" },
    { name: "Palestine", code: "+970" },
    { name: "Panama", code: "+507" },
    { name: "Papua New Guinea", code: "+675" },
    { name: "Paraguay", code: "+595" },
    { name: "Peru", code: "+51" },
    { name: "Philippines", code: "+63" },
    { name: "Pitcairn", code: "+64" },
    { name: "Poland", code: "+48" },
    { name: "Portugal", code: "+351" },
    { name: "Puerto Rico", code: "+1" },
    { name: "Qatar", code: "+974" },
    { name: "Republic of the Congo", code: "+242" },
    { name: "Reunion", code: "+262" },
    { name: "Romania", code: "+40" },
    { name: "Russia", code: "+7" },
    { name: "Rwanda", code: "+250" },
    { name: "Saint Barthelemy", code: "+590" },
    { name: "Saint Helena", code: "+290" },
    { name: "Saint Kitts and Nevis", code: "+1" },
    { name: "Saint Lucia", code: "+1" },
    { name: "Saint Martin", code: "+590" },
    { name: "Saint Pierre and Miquelon", code: "+508" },
    { name: "Saint Vincent and the Grenadines", code: "+1" },
    { name: "Samoa", code: "+685" },
    { name: "San Marino", code: "+378" },
    { name: "Sao Tome and Principe", code: "+239" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "Senegal", code: "+221" },
    { name: "Serbia", code: "+381" },
    { name: "Seychelles", code: "+248" },
    { name: "Sierra Leone", code: "+232" },
    { name: "Singapore", code: "+65" },
    { name: "Sint Maarten", code: "+1" },
    { name: "Slovakia", code: "+421" },
    { name: "Slovenia", code: "+386" },
    { name: "Solomon Islands", code: "+677" },
    { name: "Somalia", code: "+252" },
    { name: "South Africa", code: "+27" },
    { name: "South Korea", code: "+82" },
    { name: "South Sudan", code: "+211" },
    { name: "Spain", code: "+34" },
    { name: "Sri Lanka", code: "+94" },
    { name: "Sudan", code: "+249" },
    { name: "Suriname", code: "+597" },
    { name: "Svalbard and Jan Mayen", code: "+47" },
    { name: "Swaziland", code: "+268" },
    { name: "Sweden", code: "+46" },
    { name: "Switzerland", code: "+41" },
    { name: "Syria", code: "+963" },
    { name: "Taiwan", code: "+886" },
    { name: "Tajikistan", code: "+992" },
    { name: "Tanzania", code: "+255" },
    { name: "Thailand", code: "+66" },
    { name: "Togo", code: "+228" },
    { name: "Tokelau", code: "+690" },
    { name: "Tonga", code: "+676" },
    { name: "Trinidad and Tobago", code: "+1" },
    { name: "Tunisia", code: "+216" },
    { name: "Turkey", code: "+90" },
    { name: "Turkmenistan", code: "+993" },
    { name: "Turks and Caicos Islands", code: "+1" },
    { name: "Tuvalu", code: "+688" },
    { name: "U.S. Virgin Islands", code: "+1" },
    { name: "Uganda", code: "+256" },
    { name: "Ukraine", code: "+380" },
    { name: "United Arab Emirates", code: "+971" },
    { name: "United Kingdom", code: "+44" },
    { name: "United States", code: "+1" },
    { name: "Uruguay", code: "+598" },
    { name: "Uzbekistan", code: "+998" },
    { name: "Vanuatu", code: "+678" },
    { name: "Vatican", code: "+39" },
    { name: "Venezuela", code: "+58" },
    { name: "Vietnam", code: "+84" },
    { name: "Wallis and Futuna", code: "+681" },
    { name: "Western Sahara", code: "+212" },
    { name: "Yemen", code: "+967" },
    { name: "Zambia", code: "+260" },
    { name: "Zimbabwe", code: "+263" }
];

let selectedCountry = null;

// Toast notification functions
function showToast(message, type = 'success', duration = 10000) {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    toast.innerHTML = `
        <span>${message}</span>
        <button class="close-btn">&times;</button>
    `;

    toastContainer.appendChild(toast);

    // Show toast with animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Auto remove toast
    const autoRemoveTimer = setTimeout(() => {
        removeToast(toast);
    }, duration);

    // Manual close button
    toast.querySelector('.close-btn').addEventListener('click', () => {
        clearTimeout(autoRemoveTimer);
        removeToast(toast);
    });
}

function removeToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 300);
}

// Initialize country dropdown
function initializeCountryDropdown() {
    const countryList = document.getElementById('countryList');
    countryList.innerHTML = ''; // Clear to avoid duplicates
    countries.forEach(country => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.textContent = `${country.name} (${country.code})`;
        item.addEventListener('click', () => selectCountry(country));
        countryList.appendChild(item);
    });
}

// Country dropdown functionality
document.getElementById('nationalityButton').addEventListener('click', function () {
    const dropdown = document.getElementById('nationalityDropdown');
    const button = document.getElementById('nationalityButton');

    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        button.classList.remove('open');
    } else {
        dropdown.style.display = 'block';
        button.classList.add('open');
        document.getElementById('countrySearch').focus();
    }
});

// Country search functionality
document.getElementById('countrySearch').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const countryItems = document.querySelectorAll('#countryList .dropdown-item');

    countryItems.forEach(item => {
        const countryName = item.textContent.toLowerCase();
        item.style.display = countryName.includes(searchTerm) ? 'block' : 'none';
    });
});

function selectCountry(country) {
    selectedCountry = country;
    document.getElementById('nationalityText').textContent = country.name;
    document.getElementById('nationality').value = country.name;
    document.getElementById('nationalityDropdown').style.display = 'none';
    document.getElementById('nationalityButton').classList.remove('open');

    // Update phone field placeholder
    const phoneField = document.getElementById('phone');
    phoneField.placeholder = `${country.code} xxxxxxxxxx`;

    // Re-validate form on selection
    validateForm();
}

// Start date dropdown functionality
document.getElementById('startDateButton').addEventListener('click', function () {
    const dropdown = document.getElementById('startDateDropdown');
    const button = document.getElementById('startDateButton');

    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        button.classList.remove('open');
    } else {
        dropdown.style.display = 'block';
        button.classList.add('open');
    }
});

document.querySelectorAll('#startDateDropdown .dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        document.getElementById('startDateText').textContent = value;
        document.getElementById('startDate').value = value;
        document.getElementById('startDateDropdown').style.display = 'none';
        document.getElementById('startDateButton').classList.remove('open');

        // Re-validate after pick
        validateForm();
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown-container')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
        document.querySelectorAll('.dropdown-button').forEach(button => {
            button.classList.remove('open');
        });
    }
});

// Form validation to enable button only when all fields are filled and email is valid
function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const nationality = document.getElementById('nationality').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const startDate = document.getElementById('startDate').value.trim();
    const interest = document.querySelector('input[name="interest"]:checked');
    const cityDate = document.querySelector('input[name="cityDate"]:checked');
    const time = document.querySelector('input[name="time"]:checked');

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const allFilled = fullName && nationality && emailValid && phone && startDate && interest && cityDate && time;

    document.getElementById('registerButton').disabled = !allFilled;
}

// Attach validation listeners
document.getElementById('fullName').addEventListener('input', validateForm);
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('phone').addEventListener('input', validateForm);
document.querySelectorAll('input[name="interest"], input[name="cityDate"], input[name="time"]').forEach(el => {
    el.addEventListener('change', validateForm);
});

// Form submission
document.getElementById('registrationForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const button = document.getElementById('registerButton');
    const buttonText = document.getElementById('buttonText');

    // Show loading state
    button.disabled = true;
    buttonText.innerHTML = '<div class="loading-spinner"></div>';

    // Collect form data
    const formData = {
        full_name: document.getElementById('fullName').value,
        nationality: document.getElementById('nationality').value,
        email: document.getElementById('email').value,
        phone_number: selectedCountry ? `${selectedCountry.code}${document.getElementById('phone').value}` : document.getElementById('phone').value,
        interest: document.querySelector('input[name="interest"]:checked')?.value || '',
        start_date: document.getElementById('startDate').value,
        city_date: document.querySelector('input[name="cityDate"]:checked')?.value || '',
        time: document.querySelector('input[name="time"]:checked')?.value || '',
        notes: '',
    };

    try {
        const success = await sendToBigQuery(formData);

        if (success) {
            // Show thank you section instead of resetting form
            document.getElementById("registrationForm").style.display = "none";
            document.getElementById("thankYouMessage").style.display = "block";
        } else {
            // Restore button text on failure
            buttonText.textContent = 'Register Now';
            validateForm();
        }

    } catch (error) {
        showToast('Registration failed. Please try again.', 'error');
        buttonText.textContent = 'Register Now';
        validateForm();
    }
});

// BigQuery integration function
async function sendToBigQuery(data) {
    try {
        const response = await fetch("https://synctobigqueryandemail-13608153412.europe-west1.run.app", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok && result.status === "success") {
            showToast(result.message, "success");
            return true;
        } else {
            showToast(result.message, "error");
            return false;
        }

    } catch (error) {
        showToast("Network error. Please check your connection and try again.", 'error');
        return false;
    }
}

// Reopen form button
document.getElementById("reopenFormBtn").addEventListener("click", function () {
    document.getElementById("registrationForm").reset();
    document.getElementById("nationalityText").textContent = "Select Country";
    document.getElementById("startDateText").textContent = "Select Date";
    selectedCountry = null;
    document.getElementById("thankYouMessage").style.display = "none";
    document.getElementById("registrationForm").style.display = "block";
    validateForm();
});

// Initial setup
initializeCountryDropdown();
validateForm();
