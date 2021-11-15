/*
EMAIL VALIDATION
*/
/*
const form = document.querySelector('.footer-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.querySelector('.footer-email');
    var message = document.querySelector('.footer-error');
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === '') {
        console.log(email.value);
        message.innerText = 'Please add your email';
        message.style.visibility = 'visible';
    }
    else if (!regex.test(email.value)) {
        message.innerText = 'Please check your email!';
        message.style.visibility = 'visible';
    }
    else {
        message.innerText = '';
        message.style.visibility = 'hidden';
        form.submit();
    }
});
*/

/*FAQ SECTION*/
/*
const question = document.querySelectorAll('.faq-questions');
question.forEach((faq - questions) => faq - questions.addEventListener('click', () => {
    console.log('clicked');
}));
*/
