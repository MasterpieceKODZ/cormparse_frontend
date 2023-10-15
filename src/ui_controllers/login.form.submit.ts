export function submitLoginForm(e: Event) {
	e.preventDefault();

    // reset password input type to password before submiting form to prevent browser from caching the input value
    const pwdInp = document.getElementById("inp_lgn_pw");
    pwdInp?.setAttribute("type","password")
}
