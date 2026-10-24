//your JS code here. If required.
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value.trim();

    if (age === "" || name === "") {
        alert("Please enter valid details.");
        return;
    }

    const userAge = Number(age);

    const checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAge > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    checkAge
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});