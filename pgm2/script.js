function submitForm() {
    const name = document.getElementById("name").value;
    if (name) {
        document.getElementById("message").innerText =
            `Thank you, ${name}! Your form has been submitted.`;
    }
    return false;
}
