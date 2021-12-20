"use strict";

// function sendEmailList() {
//   for (let i = 1; i <= 30; i++) {
//     console.log("Gromcode party invitation was sent!");
//   }
// }

// sendEmailList();

function sendEmail() {
  return "Gromcode party invitation was sent!";
}

function sendEmailList() {
  for (let i = 0; i < 30; i++) {
    console.log(sendEmail());
  }
}
sendEmailList();
