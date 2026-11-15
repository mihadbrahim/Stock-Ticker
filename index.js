import { getStockData } from './fakeStockAPI.js'
// console.log(getStockData())

setInterval(function () {
    const stockData = getStockData()
    renderStockData(stockData)
}, 1500)

let prevPrice = null

function renderStockData(stockData) {
    const stockDispalyName = document.getElementById("name")
    const stockDisplaySym = document.getElementById("sym")
    const stockDisplayPrice = document.getElementById("price")
    const stockDisplayIconPrice = document.getElementById("price-icon")
    const stockDisplayTime = document.getElementById("time")

    const { name, sym, price, Time } = stockData

    stockDispalyName.innerText = name
    stockDisplaySym.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = Time

    const directionIconPrice = price > prevPrice ? 'svg/green.svg' : price < prevPrice ? 'svg/red.svg' : 'svg/grey.svg'

    const iconPrice = document.createElement("img")
    iconPrice.src = directionIconPrice
    iconPrice.alt = 'Stock Ticker Price Icon'
    stockDisplayIconPrice.innerHTML = ''
    stockDisplayIconPrice.appendChild(iconPrice)

    prevPrice = price
}