const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const feedsPage = document.querySelector('.feeds-page');
const newsFeedPage = document.querySelector('.feeds-page');

const signupBtn = document.querySelector('.middle-signup-btn');
const loginBtn = document.querySelector('.middle-login-btn');

const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');

const topLoginBtn = document.querySelector('.top-right-login-btn');


const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
}

signupBtn.addEventListener('click', e => {
    goToLoginPage();
});

loginBtn.addEventListener('click', e => {
    goToLoginPage();
});

topLoginBtn.addEventListener('click', e => {
    const inputUserInfo = document.querySelector('.user-info');
	const inputPassword = document.querySelector('.password');

	if (inputUserInfo.value !== '' && inputPassword.value !== '') {
		mainPage.style.display = 'none';
		newsFeedPage.style.display = 'block';
	} else {
		goToLoginPage();
		loginModal.style.display = 'flex';
	}
});

modalX.addEventListener('click', () => {
	loginModal.style.display = 'none';
});