function enableEdit() {
    document.querySelectorAll('.profile-card input')
        .forEach(input => input.disabled = false);
}

function saveProfile() {
    document.querySelectorAll('.profile-card input')
        .forEach(input => input.disabled = true);

    alert("Profile updated successfully!");
}
