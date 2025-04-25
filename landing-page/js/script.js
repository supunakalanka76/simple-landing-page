function initMap() {
    const location = {lat: 6.845034240444388, lng: 79.94082926205675};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const languageMenu = document.getElementById("languageDropdown");
    const welcomeText = document.getElementById("hero-title");

    // Language dictionary
    const translations = {
        "en": "Welcome",
        "es": "Bienvenido"
    };

    languageMenu.addEventListener("click", function(event) {
        if (event.target.classList.contains("dropdown-item")) {
            const selectedLang = event.target.getAttribute("data-lang");

            // Update the text based on the selected language
            welcomeText.textContent = translations[selectedLang];
        }
    });
});
