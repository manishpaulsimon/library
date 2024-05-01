

// Toggle have-read and not-read buttons
const haveReadButtons = document.querySelectorAll('.have-read');
haveReadButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('have-read')) {
      button.textContent = 'Not Read';
      button.classList.remove('have-read');
      button.classList.add('not-read')
    }
    else if (button.classList.contains('not-read')) {
      button.textContent = 'Have Read';
      button.classList.remove('not-read')
      button.classList.add('have-read');
    }
  });
});

// remove sub-container when clicking on remove button
const removeButtons = document.querySelectorAll('.remove')
removeButtons.forEach((removeBtn) => {
  removeBtn.addEventListener('click', (e) => {   
    // navigate the DOM tree to find the closest sub-container 
    const subContainer = removeBtn.closest('.sub-container');

    // remove the sub-container
    if (subContainer) {
      subContainer.remove();
    }
  })
})


// Add Book to Library

// Show form when clicking on 'addBookButton'
const addBookButton = document.getElementById('add-button');
const form = document.getElementById('new-form');
addBookButton.addEventListener('click', () => {
  form.style.visibility = 'visible';
  const mainContainer = document.querySelector('.main-container');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  mainContainer.appendChild(overlay);
});

// remove form on tapping on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    form.style.visibility = 'hidden';
    document.querySelector('.overlay').remove();
  }
})

// remove form by clicking outside
document.addEventListener('click', (e) => {
  if (form.style.visibility === 'visible' &&!form.contains(event.target) && !addBookButton.contains(event.target)) {
    form.style.visibility = 'hidden';
    document.querySelector('.overlay').remove();
  }
})









// const myLibrary = ['Harry Potter','The God of Small Things'];


// function Book() {
//   let isDialogOpen = false; // Track if the dialog is open

//   // Add event listener to the open button to show dialog box
//   addBookButton.addEventListener('click', () => {

//     if (isDialogOpen) return; // Prevent opening multiple dialogs
//     isDialogOpen = true;

//     const newDialog = document.createElement('dialog');
//     newDialog.classList.add('new-dialog');

//     // Create a new Div to append books to it
//     myLibrary.forEach(book => {
//       const newDiv = document.createElement('div');
//       newDiv.textContent = book;
//       newDialog.appendChild(newDiv);
//     });    

//     // Create close button to close the newly created dialog box
//     const closeButton = document.createElement('button');
//     closeButton.textContent = 'Close';
//     closeButton.addEventListener('click',() => {
//       console.log("Attempting to close the dialog");

//       newDialog.close();
//       isDialogOpen = false;
//     }); 

//     newDialog.appendChild(closeButton);
//     document.body.appendChild(newDialog);
//     newDialog.showModal();

//   });
// }

// Book();

// function addBookToLibrary() {
//   // Create Dialog element and append information to it
  
// }