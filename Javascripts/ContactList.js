let createContact = require("./Contact");
let getContacts = require("./ContactCollection");


funtion listContacts(){
getContacts().forEach(contact => {
    let contactComponent = createContact(contact.name, contact.phone, contact.number);
    writeContactsToDOM(contactComponent);
});
}

function writeContactsToDOM(contact){
    document.querySelector("#contactList").innerHTML += contact;


}   


module.exports = listContacts;
    
