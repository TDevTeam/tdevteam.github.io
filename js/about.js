const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");

const role1 = document.getElementById("Role1");
const role2 = document.getElementById("Role2");
const role3 = document.getElementById("Role3");

const username1 = document.getElementById("username1");
const username2 = document.getElementById("username2");
const username3 = document.getElementById("username3");

const email1 = document.getElementById("email1");
const email2 = document.getElementById("email2");
const email3 = document.getElementById("email3");

const description1 = document.getElementById("description1");
const description2 = document.getElementById("description2");
const description3 = document.getElementById("description3");

const description = "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.";

const randomNum = Math.floor(Math.random() * 3);

if(randomNum === 0) {
    name1.textContent = "Mauro D.S.";
    role1.textContent = "Owner";
    username1.textContent = "Mauro";
    email1.textContent = "mauro@devteamit.com";
    description1.textContent = description;

    name2.textContent = "Eshwar B.Y.";
    role2.textContent = "Owner";
    username2.textContent = "zemonarch";
    email2.textContent = "eshwar@devteamit.com";
    description2.textContent = description;

    name3.textContent = "Ananamay Shaji";
    role3.textContent = "Owner";
    username3.textContent = "spicyboi1024";
    email3.textContent = "ananamay@devteamit.com";
    description3.textContent = description;
}
if(randomNum === 1) {
    name1.textContent = "Ananamay Shaji";
    role1.textContent = "Owner";
    username1.textContent = "spicyboi1024";
    email1.textContent = "ananamay@devteamit.com";
    description1.textContent = description;

    name2.textContent = "Mauro D.S.";
    role2.textContent = "Owner";
    username2.textContent = "Mauro";
    email2.textContent = "mauro@devteamit.com";
    description2.textContent = description;

    name3.textContent = "Eshwar B.Y.";
    role3.textContent = "Owner";
    username3.textContent = "zemonarch";
    email3.textContent = "eshwar@devteamit.com";
    description3.textContent = eshwardescription;
}
if(randomNum === 2) {
    name1.textContent = "Eshwar B.Y.";
    role1.textContent = "Owner";
    username1.textContent = "zemonarch";
    email1.textContent = "eshwar@devteamit.com";
    description1.textContent = eshwardescription;

    name2.textContent = "Ananamay Shaji";
    role2.textContent = "Owner";
    username2.textContent = "spicyboi1024";
    email2.textContent = "ananamay@devteamit.com";
    description2.textContent = description;

    name3.textContent = "Mauro D.S.";
    role3.textContent = "Owner";
    username3.textContent = "Mauro";
    email3.textContent = "mauro@devteamit.com";
    description3.textContent = description;
}