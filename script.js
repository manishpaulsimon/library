const container = document.querySelector(".container");

// Toggle Read and remove functinalities

document.addEventListener("DOMContentLoaded", () => {
  container.addEventListener("click", (event) => {
    // Check if the clicked element is a button that should toggle read state
    if (
      event.target.classList.contains("have-read") ||
      event.target.classList.contains("not-read")
    ) {
      toggleReadState(event.target);
    }

    if (event.target.classList.contains("remove")) {
      const subContainer = event.target.closest(".sub-container");
      // remove the sub-container
      if (subContainer) {
        subContainer.remove();
      }
    }
  });
});

function toggleReadState(clickedButton) {
  if (clickedButton.classList.contains("have-read")) {
    clickedButton.textContent = "Not Read";
    clickedButton.classList.remove("have-read");
    clickedButton.classList.add("not-read");
  } else if (clickedButton.classList.contains("not-read")) {
    clickedButton.textContent = "Have Read";
    clickedButton.classList.remove("not-read");
    clickedButton.classList.add("have-read");
  }
}

// Add Book to Library
// Show form when clicking on 'addBookButton'
const addBookButton = document.getElementById("add-button");
const form = document.getElementById("new-form");
addBookButton.addEventListener("click", () => {
  form.style.visibility = "visible";
  const mainContainer = document.querySelector(".main-container");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  mainContainer.appendChild(overlay);
});

// remove form when tapping on escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    form.style.visibility = "hidden";
    document.querySelector(".overlay").remove();
  }
});

// remove form by clicking outside
document.addEventListener("click", (e) => {
  if (
    form.style.visibility === "visible" &&
    !form.contains(e.target) &&
    !addBookButton.contains(e.target)
  ) {
    form.style.visibility = "hidden";
    document.querySelector(".overlay").remove();
  }
});

// Submit form to library when clicking on submit
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const newSubContainer = document.createElement("div");
  newSubContainer.classList.add("sub-container");

  // query select the forms
  const titleText = document.getElementById("title");
  const authorText = document.getElementById("author");
  const numberOfPages = document.getElementById("pages");
  const isReadChecked = document.getElementById("checkbox");

  // Validate inputs
  if (!titleText.checkValidity()) {
    document.getElementById("titleError").textContent =
      titleText.validationMessage;
    return; // Stop the function if any field is empty
  }

  if (!authorText.checkValidity()) {
    document.getElementById("authorError").textContent =
      authorText.validationMessage;
    return; // Stop the function if any field is empty
  }

  if (!numberOfPages.checkValidity()) {
    document.getElementById("pagesError").textContent =
      numberOfPages.validationMessage;
    return; // Stop the function if any field is empty
  }

  // Create the various inputs for the new form
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = titleText.value;

  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = authorText.value;

  const pages = document.createElement("p");
  pages.classList.add("pages");
  pages.textContent = numberOfPages.value;

  const newDiv = document.createElement("div");
  newDiv.classList.add("button-list");

  const haveReadButton = document.createElement("button");
  if (isReadChecked) {
    haveReadButton.classList.add("not-read");
    haveReadButton.textContent = "Not Read";
  } else {
    haveReadButton.classList.add("have-read");
    haveReadButton.textContent = "Have Read";
  }

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.textContent = "Remove";

  // append buttons to newDIV
  newDiv.appendChild(haveReadButton);
  newDiv.appendChild(removeButton);

  // append children to newSubContainer
  newSubContainer.appendChild(title);
  newSubContainer.appendChild(author);
  newSubContainer.appendChild(pages);
  newSubContainer.appendChild(newDiv);

  // append subcontainer to container
  container.appendChild(newSubContainer);

  // hide form when clicking on submit
  form.style.visibility = "hidden";
  document.querySelector(".overlay").remove();
});
