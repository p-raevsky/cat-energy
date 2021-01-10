var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');
var noJs = document.querySelector('.main-nav__toggle');
var buttonForm = document.querySelector('.form__button');
var dataItemField = document.querySelectorAll('.data-item__field:required');
var fieldContactsTel = document.querySelector('.data-item__field--contacts--tel');
var fieldContactsEmail = document.querySelector('.data-item__field--contacts--email');
var contactsIconTel = document.querySelector('.contacts__icon--tel');
var contactsIconEmail = document.querySelector('.contacts__icon--email');

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
    return;
  });
}

if (fieldContactsTel) {
  document.addEventListener('DOMContentLoaded', function() {
    if (fieldContactsTel.disabled === true) {
      contactsIconTel.classList.add('contacts__icon--tel--disabled');
    }
    return;
  });
}

if (fieldContactsEmail) {
  document.addEventListener('DOMContentLoaded', function() {
    if (fieldContactsEmail.disabled === true) {
      contactsIconEmail.classList.add('contacts__icon--email--disabled');
    }
    return;
  });
}
