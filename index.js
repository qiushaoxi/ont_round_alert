const email = require('./utils/email')
const axios = require('axios')

async function main() {

    const url = "https://explorer.ont.io/v2/nodes/block-count-to-next-round"
    const resp = await axios.get(url)
    console.log(resp.data)
    const number = resp.data.result
    if (number < 5000) {
        await email("ont切换周期" + number, number)
    }
}

main().catch(err => {
    console.error(err)
})

