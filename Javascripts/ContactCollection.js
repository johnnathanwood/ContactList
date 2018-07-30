"use strict";

let contacts = [
    {
        name: "John Wood",
        phone: "615-351-4130",
        address: "303 New York New York, TN"
        
    },
    {
        name: "Jessica Wood",
        phone: "615-341-4130",
        address: "303 New York New York, TN"
    
    },
    {
        name: "Ogan Wood",
        phone: "615-351-4130",
        address: "303 New York New York, TN"
    
    }
];

localStorage.setItem("contacts",
JSON.stringify(contacts));

function getContacts(){
    return JSON.parse(localStorage.getItem("contacts"));
}

module.exports = getContacts; 
