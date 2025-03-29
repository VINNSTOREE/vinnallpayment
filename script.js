function copyText(button) {
    let inputField = button.previousElementSibling;
    inputField.select();
    inputField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputField.value);

    button.textContent = "✔️ Disalin!";
    setTimeout(() => {
        button.textContent = "📋 Salin Paket";
    }, 2000);
}
