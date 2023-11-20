function togglePasswordVisibility() {
	const passwordInput = document.getElementById('password')
	const togglePasswordButton = document.getElementById('toggle-password')
	const iconVisible = document.getElementById('pswd-icon-visible')
	const iconHidden = document.getElementById('pswd-icon-hidden')

	togglePasswordButton.addEventListener('click', (e) => {
		e.preventDefault()
		if (passwordInput.type === 'password') {
			passwordInput.type = 'text'
			iconVisible.style.display = 'block'
			iconHidden.style.display = 'none'
		} else {
			passwordInput.type = 'password'
			iconVisible.style.display = 'none'
			iconHidden.style.display = 'block'
		}
	})
}
if (document.getElementById('password')) {
	togglePasswordVisibility()
}
