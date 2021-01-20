var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');
var noJs = document.querySelector('.main-nav__toggle');
var buttonForm = document.querySelector('.form__button');
var dataItemField = document.querySelectorAll('.data-item__field:required');
var fieldContactsTel = document.querySelector('.data-item__field--tel');
var fieldContactsEmail = document.querySelector('.data-item__field--email');
var contactsIconTel = document.querySelector('.contacts__icon--tel');
var contactsIconEmail = document.querySelector('.contacts__icon--email');
var demoBtnBefore = document.querySelector('.demo__btn--before');
var demoBtnAfter = document.querySelector('.demo__btn--after');
var demoControl = document.querySelector('.demo__control');
var demoImgAfter = document.querySelector('.demo__img--after');
var demoImgBefore = document.querySelector('.demo__img--before');

if (noJs.classList.contains('main-nav__toggle--nojs')) {
  navMain.classList.add('main-nav__list--closed');
  navToggle.classList.add('main-nav__toggle--closed');
}

navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__list--closed')) {
    navMain.classList.remove('main-nav__list--closed');
    navToggle.classList.remove('main-nav__toggle--closed');
  } else {
    navMain.classList.add('main-nav__list--closed');
    navToggle.classList.add('main-nav__toggle--closed');
  }
});

if (buttonForm) {
  buttonForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    for (var i = 0; i < dataItemField.length; i++) {
      if (dataItemField[i].value === '') {
        dataItemField[i].classList.add('data-item__field--error');
      } else {
        dataItemField[i].classList.remove('data-item__field--error');
      }
    }
    if (fieldContactsTel.value === '') {
      contactsIconTel.classList.add('contacts__icon--tel--error');
    }
    if (fieldContactsEmail.value === '') {
      contactsIconEmail.classList.add('contacts__icon--email--error');
    }
    return;
  });
}

if (demoBtnAfter) {
  demoBtnAfter.addEventListener('click', function () {
    demoControl.classList.add('demo__control--toggle');
    demoControl.classList.add('demo__control--after');
    demoControl.classList.remove('demo__control--before');
    demoImgAfter.classList.remove('demo__img--close');
    demoImgBefore.classList.add('demo__img--close');
    demoImgAfter.classList.add('demo__img--after--full');
    demoImgBefore.classList.add('demo__img--before--close');
    demoImgBefore.classList.remove('demo__img--after--full');
    demoImgAfter.classList.remove('demo__img--before--close');
  });
}

if (demoBtnBefore) {
  demoBtnBefore.addEventListener('click', function () {
    demoControl.classList.remove('demo__control--toggle');
    demoControl.classList.add('demo__control--before');
    demoControl.classList.remove('demo__control--after');
    demoImgAfter.classList.add('demo__img--close');
    demoImgBefore.classList.remove('demo__img--close');
    demoImgBefore.classList.add('demo__img--after--full');
    demoImgAfter.classList.add('demo__img--before--close');
    demoImgAfter.classList.remove('demo__img--after--full');
    demoImgBefore.classList.remove('demo__img--before--close');
  });
}

if (dataItemField.length > 0) {
  document.addEventListener('click', function (evt) {
    for (var i = 0; i < dataItemField.length; i++) {
      if (dataItemField[i].value !== '') {
        dataItemField[i].classList.remove('data-item__field--error');
      }
    }
    if (fieldContactsTel.value !== '') {
      contactsIconTel.classList.remove('contacts__icon--tel--error');
    }
    if (fieldContactsEmail.value !== '') {
      contactsIconEmail.classList.remove('contacts__icon--email--error');
    }
  });
}
