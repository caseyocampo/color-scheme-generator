const getSchemeColorBtn = document.getElementById('getSchemeColorBtn')
getSchemeColorBtn.addEventListener('click', getSchemeColor)

function getSchemeColor() {
    const seedColor = document.getElementById('seedColor').value.slice(1, 7)
    const colorScheme = document.getElementById('colorScheme').value
    const hex1 = document.getElementById('hex1')
    const hex2 = document.getElementById('hex2')
    const hex3 = document.getElementById('hex3')
    const hex4 = document.getElementById('hex4')
    const hex5 = document.getElementById('hex5')
    const hexBg1 = document.getElementById('hexBg1')
    const hexBg2 = document.getElementById('hexBg2')
    const hexBg3 = document.getElementById('hexBg3')
    const hexBg4 = document.getElementById('hexBg4')
    const hexBg5 = document.getElementById('hexBg5')

    fetch(
        `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorScheme}&count=5`
    )
        .then(res => res.json())
        .then(data => {
            hex1.textContent = data.colors[0].hex.value
            hexBg1.style.backgroundColor = data.colors[0].hex.value

            hex2.textContent = data.colors[1].hex.value
            hexBg2.style.backgroundColor = data.colors[1].hex.value

            hex3.textContent = data.colors[2].hex.value
            hexBg3.style.backgroundColor = data.colors[2].hex.value

            hex4.textContent = data.colors[3].hex.value
            hexBg4.style.backgroundColor = data.colors[3].hex.value

            hex5.textContent = data.colors[4].hex.value
            hexBg5.style.backgroundColor = data.colors[4].hex.value
        })
}
