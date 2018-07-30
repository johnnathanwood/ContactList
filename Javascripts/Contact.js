"use strict";

function createContact(name, phone, address){

    //you can come up with a string//
    return `<h2>${name}</h2>`
           `<p>${phone}</p>`
           `<p>${address}</p>`;

}

module.exports = createContact;