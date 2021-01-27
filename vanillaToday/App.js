//^ elements---------------------------------------------------------
const inpt = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

//^event handelrs----------------------------------------------------

const onClickHandler = () => {
	const html = `<li>${inpt.value}</li>`;
	list.insertAdjacentHTML("beforeend", html);
	inpt.value = "";
};

//^evenets-----------------------------------------------------------
btn.addEventListener("click", onClickHandler);
