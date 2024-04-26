const myLibrary = ['Harry Potter','The God of Small Things'];
const form = document.getElementById('new-form');
const openButton = document.getElementById('open-button');


function Book() {
  let isDialogOpen = false; // Track if the dialog is open

  // Add event listener to the open button to show dialog box
  openButton.addEventListener('click', () => {

    if (isDialogOpen) return; // Prevent opening multiple dialogs
    isDialogOpen = true;

    const newDialog = document.createElement('dialog');
    newDialog.classList.add('new-dialog');

    // Create a new Div to append books to it
    myLibrary.forEach(book => {
      const newDiv = document.createElement('div');
      newDiv.textContent = book;
      newDialog.appendChild(newDiv);
    });

      // Append the Close button the new dialog box
    

    // Create close button to close the newly created dialog box
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click',() => {
      console.log("Attempting to close the dialog");

      newDialog.close();
      isDialogOpen = false;
    }); 

    newDialog.appendChild(closeButton);
    document.body.appendChild(newDialog);
    newDialog.showModal();

  });
}

Book();

function addBookToLibrary() {
  // Create Dialog element and append information to it
  
}