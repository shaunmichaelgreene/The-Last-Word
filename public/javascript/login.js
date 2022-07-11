async function loginFormHandler(event) {
    event.preventDefault

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}
async function registrationFormHandler(event) {
    event.preventDefault

    const username = document.querySelector('#username-createaccount').value.trim();
    const email = document.querySelector('#email-createaccount').value.trim();
    const password = document.querySelector('#password-createaccount').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}



document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.registration-form').addEventListener('submit', registrationFormHandler);