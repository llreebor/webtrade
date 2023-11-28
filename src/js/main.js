// Toggle Password Visibility
function togglePasswordVisibility() {
	const passwordInput = document.querySelectorAll('.password-input')
	const togglePasswordButtons = document.querySelectorAll(
		'.toggle-password-btn'
	)
	const iconsVisible = document.querySelectorAll('.pswd-icon-visible')
	const iconsHidden = document.querySelectorAll('.pswd-icon-hidden')

	togglePasswordButtons.forEach((toggleBtn, idx) => {
		toggleBtn.addEventListener('click', (e) => {
			e.preventDefault()
			if (passwordInput[idx].type === 'password') {
				passwordInput[idx].type = 'text'
				iconsVisible[idx].style.display = 'block'
				iconsHidden[idx].style.display = 'none'
			} else {
				passwordInput[idx].type = 'password'
				iconsVisible[idx].style.display = 'none'
				iconsHidden[idx].style.display = 'block'
			}
		})
	})
}

if (document.getElementById('password')) {
	togglePasswordVisibility()
}

// Modals
function toggleModal(btnId, modalId, closeBtnId) {
	const modal = document.getElementById(modalId)
	const btn = document.getElementById(btnId)
	const close = document.getElementById(closeBtnId)
	const body = document.querySelector('body')

	btn.addEventListener('click', () => {
		modal.classList.toggle('hidden')
		modal.classList.toggle('flex')
		body.classList.toggle('overflow-hidden')
		body.classList.toggle('pr-[6px]')
	})

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.classList.toggle('hidden')
			body.classList.toggle('pr-[6px]')
			modal.classList.toggle('flex')
			body.classList.toggle('overflow-hidden')
		}
	})

	close.addEventListener('click', () => {
		modal.classList.toggle('hidden')
		modal.classList.toggle('flex')
		body.classList.toggle('pr-[6px]')
		body.classList.toggle('overflow-hidden')
	})
}
if (document.querySelector('#create-tournament-modal')) {
	// Tournament Modal
	toggleModal(
		'create-tournament-btn',
		'create-tournament-modal',
		'create-tournament-close-btn'
	)
}
if (document.querySelector('#account-settings-modal')) {
	// Account Setting Modal
	toggleModal(
		'account-settings-btn',
		'account-settings-modal',
		'account-settings-close-btn'
	)
}

// Add User Tournament Modal
function toggleAddUserTournamentModal() {
	const modal = document.getElementById('user-tournament-modal')
	const btn = document.getElementById('create-user-tournament-btn')
	const close = document.getElementById('user-tournament-close')

	btn.addEventListener('click', () => {
		modal.classList.remove('hidden')
		modal.classList.add('block')
	})
	close.addEventListener('click', () => {
		modal.classList.add('hidden')
		modal.classList.remove('block')
	})
}
toggleAddUserTournamentModal()

// Lock Button
function toggleLockButton() {
	const btn = document.querySelector('.lock-button')
	const table = document.querySelector('.order-book-table')

	btn.addEventListener('click', () => {
		btn.classList.toggle('active')
		table.classList.toggle('active')
	})
}
toggleLockButton()
