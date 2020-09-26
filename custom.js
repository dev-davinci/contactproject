// CATCH THE ELEMENTS

let filterInput = document.querySelector("#filter");

let ul = document.querySelector("#contacts");

let li = ul.querySelectorAll("li.collection-item");

// THE FUNCTION

const filterContacts = () => {
  let filterValue = filterInput.value.toUpperCase();

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

// INITIALIZING THE FUNCTION

filterInput.addEventListener("keyup", filterContacts);
