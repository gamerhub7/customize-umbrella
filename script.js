const imageContainer = document.querySelector(".image-container");
const loaderContainer = document.getElementById("loader-container");
const blueThemeButton = document.getElementById("blue-theme");
const yellowThemeButton = document.getElementById("yellow-theme");
const pinkThemeButton = document.getElementById("pink-theme");
const umbrellaImage = document.getElementById("umbrella-image");
const logoUploadButton = document.getElementById("logo-upload-button");
const resetLogoButton = document.getElementById("reset-logo-button"); 
const logoContainer = document.getElementById("logo-container");

let logoUploadInput = document.getElementById("logo-upload-input");

const uploadedLogo = document.getElementById("uploaded-logo");
let hasLogo = false;  

function showLoader() {
  loaderContainer.classList.add("show");
}
function hideLoader() {
  loaderContainer.classList.remove("show");
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  showLoader();

  reader.onloadend = () => {
    uploadedLogo.src = reader.result;
    uploadedLogo.style.display = "block";
    logoContainer.style.display = "flex";  

    hasLogo = true;

    hideLoader();
  };

  reader.readAsDataURL(file);
}

logoUploadButton.addEventListener("click", () => {
  logoUploadInput.click();
});

logoUploadInput.addEventListener("change", handleLogoUpload);

function hideLogoIfPresent() {
  logoContainer.style.display = "none";
  uploadedLogo.style.display = "none";
}

function showLogoIfWasUploaded() {
  if (hasLogo) {
    logoContainer.style.display = "flex";
    uploadedLogo.style.display = "block";
  }
}


blueThemeButton.addEventListener("click", () => {
  showLoader();
  hideLogoIfPresent();

  setTimeout(() => {
    umbrellaImage.style.opacity = "0";
    document.body.style.backgroundColor = "#C5E0DC";
    logoUploadButton.style.backgroundColor = "#80b8efff";

    setTimeout(() => {
      umbrellaImage.src = "./assets/Blue.png";

      umbrellaImage.onload = () => {
        umbrellaImage.style.opacity = "1";
        showLogoIfWasUploaded();
        hideLoader();
      };
    }, 600);
  }, 0);
});

yellowThemeButton.addEventListener("click", () => {
  showLoader();
  hideLogoIfPresent();

  setTimeout(() => {
    umbrellaImage.style.opacity = "0";
    document.body.style.backgroundColor = "#F7E09E";
    logoUploadButton.style.backgroundColor = "#FFA500";

    setTimeout(() => {
      umbrellaImage.src = "./assets/Yello.png";

      umbrellaImage.onload = () => {
        umbrellaImage.style.opacity = "1";
        showLogoIfWasUploaded();
        hideLoader();
      };
    }, 600);
  }, 0);
});

pinkThemeButton.addEventListener("click", () => {
  showLoader();
  hideLogoIfPresent();

  setTimeout(() => {
    umbrellaImage.style.opacity = "0";
    document.body.style.backgroundColor = "#F4C4C4";
    logoUploadButton.style.backgroundColor = "#f07ad6ff";

    setTimeout(() => {
      umbrellaImage.src = "./assets/Pink.png";

      umbrellaImage.onload = () => {
        umbrellaImage.style.opacity = "1";
        showLogoIfWasUploaded();
        hideLoader();
      };
    }, 600);
  }, 0);
});

resetLogoButton.addEventListener("click", () => {
  showLoader();   

  uploadedLogo.src = "";
  hasLogo = false;

  logoContainer.style.display = "none";
  uploadedLogo.style.display = "none";

  logoUploadInput.value = ""; 
  umbrellaImage.style.opacity = "0";
  const currentUmbrella = umbrellaImage.src;

  setTimeout(() => {
    umbrellaImage.src = currentUmbrella;

    umbrellaImage.onload = () => {
      umbrellaImage.style.opacity = "1"; 
      hideLoader();                      
      umbrellaImage.onload = null;       
    };
  }, 400); 
});