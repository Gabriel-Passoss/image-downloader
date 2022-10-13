const json = require('./instagram_posts.json')
const fs = require('fs/promises')
// const urlDownload = require('js-url-downloader')

async function main() {
  const newJson = json.filter(({type}) => type === "Image").map(({id, displayUrl, commentsCount, likesCount, type, ownerUsername}) => (
    {
      id, displayUrl, commentsCount, likesCount, type, ownerUsername
    }
  ))
  
  await fs.writeFile('./filtered_json.json' , JSON.stringify(newJson, null, 2))
}

main()
