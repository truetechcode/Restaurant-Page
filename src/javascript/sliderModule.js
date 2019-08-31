'use-strict'

const DropDownModule = (() => {
    const mod = {}
    mod.dropDownMenu = () => {
        const dropTabs = document.querySelectorAll("ul li.drop-down");
        dropTabs.forEach((tab, index) => {
            tab.addEventListener('click', event => {
                const dropMenu = tab.querySelector('ul')
                dropMenu.classList.toggle('hide')
            })
        })
    }
    return mod;
})() 

export { DropDownModule }