const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const feedsPage = document.querySelector('.feeds-page');
const newsFeedPage = document.querySelector('.feeds-page');

const signupBtn = document.querySelector('.middle-signup-btn');
const loginBtn = document.querySelector('.middle-login-btn');

const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');

const topLoginBtn = document.querySelector('.top-right-login-btn');
const loginLoginBtn = document.querySelector('.login-login-btn');

const postBtn = document.querySelector('.post-btn');


const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const postModalX = document.querySelector(".modal-header i");
const modalPostBtn = document.querySelector(".modal-header button");
const modalFooterPlus = document.querySelector(".modal-footer span");
const modalInput = document.querySelector(".modal-input");


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

loginLoginBtn.addEventListener('click', e => {
    const inpUserInfo = document.querySelector('.login-user-info');
	const inpPassword = document.querySelector('.login-password');

	if (inpUserInfo.value !== '' && inpPassword.value !== '') {
		loginPage.style.display = 'none';
		newsFeedPage.style.display = 'block';
	} else {
		loginModal.style.display = 'flex';
	}
});



//post-modal


postBtn.addEventListener("click", () => {
	modalWrapper.style.display = "block";
	modalWrapper.classList.add("modal-wrapper-display");
});

const changeOpacity = x => {
	modalPostBtn.style.opacity = x;
	modalFooterPlus.style.opacity = x;
};

postModalX.addEventListener("click", () => {
	modalWrapper.style.display = "none";
	modalWrapper.classList.remove("modal-wrapper-display");

	if (modalInput.value !== "") {
		modalInput.value = "";
		changeOpacity(0.5);
	}
});

modalInput.addEventListener("keypress", e => {
	if (e.target.value !== "") {
		changeOpacity(1);
	}
});

modalInput.addEventListener("blur", e => {
	if (e.target.value === "") {
		changeOpacity(0.5);
	}
});