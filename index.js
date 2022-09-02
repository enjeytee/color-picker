
function displayColors(colors) {
    let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
    }).join('')
    document.body.innerHTML = `<div class="my-colors">${myColorsHtml}</div>`
}

async function getColors() {
    let response = await fetch(`https://apis.scrimba.com/hexcolors?count=${colorCount}`)
    let data = await response.json()
    let colors = data.colors
    displayColors(colors)
}
const colorCount = 100

getColors(colorCount)

/* MY VERSION OF THE ABOVE CODE */

// function displayColors(colors) {
//     let myColorsHtml = colors.map(function(color) {
//         return `<div class="my-color" style="background-color: ${color.value}">${color.value}</div>`
//     }).join('')

//     document.body.innerHTML = `<div class="my-colors">${myColorsHtml}</div>`
// }

// function getColors() {
//     fetch("https://apis.scrimba.com/hexcolors?count=25")
//         .then(function(response) { 
//             return response.json()})
//         .then(function(data) {
//             console.log(data)
//             let colors = data.colors
//             displayColors(colors)
//         })
// }

getColors()

/* ----------------------------- */