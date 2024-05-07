class Library {
  constructor(containerSelector) {
    this.library = [];
    this.form = document.getElementById('new-form');
    this.addBookButton = document.getElementById('add-button');
    this.submitBtn = document.querySelector('.submit-btn');
    this.container  = document.querySelector(containerSelector);
    this.init();
  }
  init() {
    this.addBooks();
    this.removeBooks();
    this.submitBooks();
    this.toggleReadState();
  }


  addBooks() {
    this.addBookButton.addEventListener('click', () => {
      this.form.style.visibility = 'visible';
      const mainContainer = document.querySelector('.main-container');
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      mainContainer.appendChild(overlay);
    });
  }
  removeBooks() {
    // remove form when tapping on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideForm();
      }
    })

    // remove form by clicking outside
    document.addEventListener('click', (e) => {
      if (this.form.style.visibility === 'visible' &&!this.form.contains(e.target) && !this.addBookButton.contains(e.target)) {
        this.hideForm();
      }
    })
  }
  hideForm() {
     // hide form when clicking on submit
    this.form.style.visibility = 'hidden';
    const overlay = document.querySelector('.overlay');
    if(overlay) {
      overlay.remove();
    }
  }

  submitBooks() {
    // Submit form to library when clicking on submit
  
    this.submitBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const newSubContainer = document.createElement('div');
      newSubContainer.classList.add('sub-container');

      // query select the forms
      const titleText = document.getElementById('title').value;
      const authorText = document.getElementById('author').value;
      const numberOfPages = document.getElementById('pages').value;
      const isReadChecked = document.getElementById('checkbox').checked;

      // Validate inputs
      if (!titleText || !authorText || !numberOfPages) {
          alert("Please fill in all required fields.");
          return; // Stop the function if any field is empty
        }

        // Create the various inputs for the new form
        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = titleText;

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = authorText;

        const pages = document.createElement('p');
        pages.classList.add('pages')
        pages.textContent = numberOfPages;

        const newDiv = document.createElement('div');
        newDiv.classList.add('button-list');

        const haveReadButton = document.createElement('button');
        if (isReadChecked) {
          haveReadButton.classList.add('not-read');
          haveReadButton.textContent = 'Not Read';
        } else {
          haveReadButton.classList.add('have-read');
          haveReadButton.textContent = 'Have Read';
        }

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'Remove';


        // append buttons to newDIV
        newDiv.appendChild(haveReadButton);
        newDiv.appendChild(removeButton);

        // append children to newSubContainer
        newSubContainer.appendChild(title);
        newSubContainer.appendChild(author);
        newSubContainer.appendChild(pages);
        newSubContainer.appendChild(newDiv);

        // append subcontainer to container
        this.container.appendChild(newSubContainer);
        this.hideForm();
      })
  }
  toggleReadState() {
    this.container.addEventListener('click', (event) => {
      // Check if the clicked element is a button that should toggle read state
      if (event.target.classList.contains('have-read') || event.target.classList.contains('not-read')) {
        this.changeReadState(event.target);
      }
  
      if (event.target.classList.contains('remove')) {
        const subContainer = event.target.closest('.sub-container');
        // remove the sub-container
        if (subContainer) {
          subContainer.remove();
        }
      }
    });
  }

  changeReadState(clickedButton) {
    if (clickedButton.classList.contains('have-read')) {
      clickedButton.textContent = 'Not Read';
      clickedButton.classList.remove('have-read');
      clickedButton.classList.add('not-read')
    }
    else if (clickedButton.classList.contains('not-read')) {
      clickedButton.textContent = 'Have Read';
      clickedButton.classList.remove('not-read')
      clickedButton.classList.add('have-read');
    }

  }
}

// Initialize the Library class
const library = new Library('.container');