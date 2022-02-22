const getSchemeColorBtn = document.getElementById('getSchemeColorBtn')
getSchemeColorBtn.addEventListener('click', getSchemeColor)

function getSchemeColor() {
    const seedColor = document.getElementById('seedColor').value.slice(1, 7)
    const colorScheme = document.getElementById('colorScheme').value
    const hexText = document.getElementsByClassName('color-hex')
    const colorColumn = document.getElementsByClassName('color-col')

    fetch(
        `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorScheme}&count=5`
    )
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < hexText.length; i++) {
                hexText[i].textContent = data.colors[i].hex.value
                colorColumn[i].style.backgroundColor = data.colors[i].hex.value
            }
        })
}
