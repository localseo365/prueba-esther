function openModal(img) {
    var modal = document.querySelector(".modal");
    var modalImg = document.querySelector(".modal-content");
  
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.classList.add("show");

 
    
  }
  
  function closeModal() {
    var modal = document.querySelector(".modal");
  
    modal.style.display = "none";
  }

  var currentImageIndex = 0;

function openModal(img) {
    var modal = document.querySelector(".modal");
    var modalImg = document.querySelector(".modal-content");
  
    modal.style.display = "block";
    modalImg.src = img.src;

    // get the index of the clicked image
    var galleryImgs = document.querySelectorAll(".gallery img");
    for (var i = 0; i < galleryImgs.length; i++) {
      if (galleryImgs[i] === img) {
        currentImageIndex = i;
        break;
      }
    }
    
  
    // add event listeners for arrow keys
    document.addEventListener("keydown", handleKeyPress);
  }
  
  function closeModal() {
    var modal = document.querySelector(".modal");
  
    modal.style.display = "none";
  
    // remove event listeners for arrow keys
    document.removeEventListener("keydown", handleKeyPress);
  }
  
  function handleKeyPress(event) {
    if (event.key === "ArrowLeft") {
      showPrevImage();
    } else if (event.key === "ArrowRight") {
      showNextImage();
    }
  }
  
  
  function showPrevImage() {
    currentImageIndex--;
  
    if (currentImageIndex < 0) {
      currentImageIndex = document.querySelectorAll(".gallery img").length - 1;
    }
  
    var newImg = document.querySelectorAll(".gallery img")[currentImageIndex];
    var modalImg = document.querySelector(".modal-content");
  
    modalImg.classList.remove("show"); // Remove the show class to trigger the fade-out animation
    setTimeout(function() {
    modalImg.src = newImg.src;
    modalImg.classList.add("show"); // Add the show class back to trigger the fade-in animation
}, 300); // Wait for the fade-out animation to complete (300ms) before updating the image source

  }
  
  function showNextImage() {
    currentImageIndex++;
  
    if (currentImageIndex >= document.querySelectorAll(".gallery img").length) {
      currentImageIndex = 0;
    }
    
    var newImg = document.querySelectorAll(".gallery img")[currentImageIndex];
    var modalImg = document.querySelector(".modal-content");
    
    modalImg.classList.remove("show"); // Remove the show class to trigger the fade-out animation
    setTimeout(function() {
      modalImg.src = newImg.src;
      modalImg.classList.add("show"); // Add the show class back to trigger the fade-in animation
    }, 300); // Wait for the fade-out animation to complete (300ms) before updating the image source

  }