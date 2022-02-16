let getSchemeColorBtn = document.getElementById('getSchemeColorBtn')
getSchemeColorBtn.addEventListener('click', getSchemeColor)

function getSchemeColor() {
    let seedColor = document.getElementById('seedColor').value.slice(1, 5)
    let colorScheme = document.getElementById('colorScheme').value

    let options = {
        method: 'GET',
        body: JSON.stringify({
            seedColor: seedColor,
            colorScheme: colorScheme,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }

    fetch(
        `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorScheme}&count=5`
    )
        .then(res => res.json())
        .then(data => console.log(data))
}
