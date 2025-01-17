document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let userImput = parseInt(document.getElementById("userimp").value) || 0;

    if (userImput === 0) {
        alert("Your number is 0.");
    } else if (isPrime(userImput)) {
        alert("Your number is Prime.");
    } else {
        alert("Your number is not prime.");
    }
});

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
