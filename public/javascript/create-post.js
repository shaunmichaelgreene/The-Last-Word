async function postFormHandler(event) {
    event.preventDefault();

    const text = document.querySelector('input[name="post-text"]').value;

    const response = await fetch ('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', postFormHandler);