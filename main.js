/*
EMAIL VALIDATION
*/

'use strict';

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

////////////////////////// TABS SECTION


const buttons = document.querySelectorAll('.features-buttons-btn');
const content = document.querySelectorAll('.illustrations');
const btn1 = document.querySelector('.features-buttons-btn--1');
const btn2 = document.querySelector('.features-buttons-btn--2');
const btn3 = document.querySelector('.features-buttons-btn--3');
const content1 = document.querySelector('.illustrations--1');
const content2 = document.querySelector('.illustrations--2');
const content3 = document.querySelector('.illustrations--3');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const clicked = e.target.closest('.features-buttons-btn');
        console.log(clicked);
        buttons.forEach(function (btnn) {
            btnn.classList.remove('clicked');
        })
        clicked.classList.add('clicked');
        if (btn2.classList.contains('clicked')) {
            content1.classList.add('active')
            content2.classList.remove('active')
            content3.classList.add('active')
        }
        else if (btn3.classList.contains('clicked')) {
            content2.classList.add('active')
            content1.classList.add('active')
            content3.classList.remove('active')

        }
        else if (btn1.classList.contains('clicked')) {
            content2.classList.add('active')
            content1.classList.remove('active')
            content3.classList.add('active')

        }
    })
})

//////////////// 
/*FAQ SECTION*/

const question = document.querySelectorAll('.faq_questions');
const answer = document.querySelectorAll('.faq_answers');
question.forEach(function (faq) {
    faq.addEventListener('click', function (e) {
        const clicked = e.target.closest('.faq_questions');
        question.forEach(function (faqq) {
            faqq.classList.remove('clicked');
        })
        clicked.classList.add('clicked');
        answer.forEach(function (anw) {
            if (anw.parentNode.classList.contains('clicked')) {
                anw.classList.remove('active');
            }

            else if (!anw.parentNode.classList.contains('clicked')) {
                anw.classList.add('active');
            }
            else if (anw.parentNode.classList.contains('clicked')) {
                anw.addEventListener('click', function () {
                    anw.classList.add('active');
                })
            }
        })
    });
})

/*
else if (!anw.classList.contains('active')) {
    anw.addEventListener('click', function () {
        anw.classList.add('active');
    }

    )
}*/