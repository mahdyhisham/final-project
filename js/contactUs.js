// n focus field

let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");

inputs.forEach((input, i) => {
  input.addEventListener("focus", () => {
    labels[i].classList.add("focusedlabel");
  });
  input.addEventListener("blur", () => {
    labels[i].classList.remove("focusedlabel");
    if (input.value != "") {
      labels[i].classList.add("focusedlabel");
    }
  });
});

// This functions does the following:
// - Reads the data from the form (data related to the message and email and name and subject)
// - Adds to firestore the data passed from the form and put it into the contactus-messages collection 
function submitMessage() {
  const email = document.querySelector('input#email').value;
  const message = document.querySelector('textarea#message').value;
  const subject = document.querySelector('input#subject').value;
  const name = document.querySelector('input#name').value;

  const data = {
    email,
    message,
    subject,
    name
  }
  db.collection('contactus-messages').add(data).then(res => {
    alert('your message has been saved successfully');
  }).catch(err => {
    console.error(err);
  })
  document.querySelector('form').reset();
  return false;
}

// Reads all the documents inside the contactus-messages collection
function readAllMessages() {
  db.collection('contactus-messages').get().then(res => {
    const docs = res.docs;
    const data = [];
    docs.forEach(doc => {
      data.push(doc.data());
    })
    // handle data as you wish
    console.log(data);
  })
}