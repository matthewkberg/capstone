const toggleBtn = '.toggle_btn'
const toggleBtnIcon = '.toggle_btn i'
const dropDownMenu = '.dropdown_menu'

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}