const indicatorGroup = document.querySelector('#price__block-indicator-apellation-group')
const indicatorInd = document.querySelector('#price__block-indicator-apellation-ind')
const indicatorApellation = document.querySelector('.indicator-apellation_active')

export const switchToInd = () => {
    indicatorApellation.style.left = '50%';
}

export const switchToGroup = () => {
    indicatorApellation.style.left = '0';
}

indicatorGroup.addEventListener('click', switchToGroup)
indicatorInd.addEventListener('click', switchToInd)