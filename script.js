const inputs = document.querySelectorAll("input");

for (let input of inputs) {
    input.addEventListener("change", () => {
        console.log("You changed the input!");
        let p = input.nextElementSibling;
        let id = input.id;

        if (!input.checkValidity()) {
            console.log(id);
            console.log(p);

            if (id === "fname" || id === "lname") {
                p.textContent = "\u26A0 Name must be between 1 and 50 characters.";
            }
            else if (id === "email") {
                p.textContent = "\u26A0 Not a valid email. Ex: you@example.com";
            }
            else if (id === "phone-number") {
                p.textContent = "\u26A0 Phone number must be between 11 and 15 digits (and +).";
            }
            else if (id === "password" || id === "confirm-password") {
                p.textContent = "\u26A0 Password must contain a minimum of 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number.";
            }
            else {
                p.textContent = "\u26A0 Invalid input!";
            }
        }
        else {
            p.textContent = "";
        }
    });
}