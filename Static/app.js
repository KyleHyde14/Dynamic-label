const ref = document.getElementById('ref')
const mo_info = document.getElementById('mo')
const ca_info = document.getElementById('ca')
const co_info = document.getElementById('co')
const combine_info = document.getElementById('combine')

const url = window.location.href
const query = url.split('?')[1].split('&')

const cleanData = query.map(x => x.split('='))

let info = {}

for(let i in cleanData){
    const key = cleanData[i][0]
    info[key] = cleanData[i][1].trim()
}

ref.textContent = info.REF
mo_info.textContent = info.MO
ca_info.textContent = info.CA
co_info.textContent = info.CO
combine_info.textContent = info.COMBINE