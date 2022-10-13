const json = require('./filtered_json.json')
const puppeter = require('puppeteer')

async function puppeteer(displayUrl, index, browser) {
      const page = await browser.newPage()
      await page.goto(displayUrl)

     await page.waitForSelector('img')
     const element = await page.$('img')
     await element.screenshot({path: `./images/post${index}.jpg`})
}

async function main() {
  const browser = await puppeter.launch()
  json.map(async (post, index) => {
    setInterval(() => {puppeteer(post.displayUrl, index, browser)}, 20000)
    
  })
}

main()