const ref = document.getElementById('ref')
const desc_info = document.getElementById('desc')
const sound = document.getElementById('sound-button')
const volume_on = document.getElementById('sound-on')
const volume_off = document.getElementById('sound-off')

const url = window.location.href
const query = url.split('?')[1].split('&')

const cleanData = query.map(x => x.split('='))

let info = {}

for(let i in cleanData){
    const key = cleanData[i][0]
    info[key] = cleanData[i][1].trim()
}

ref.textContent = info.REF
desc_info.textContent = decodeURIComponent(info.DESC).replaceAll('_', ' ')

function toggleIcon() {
    if (volume_on.style.display === 'none') {
        volume_on.style.display = 'block';
        volume_off.style.display = 'none';
    } else {
        volume_on.style.display = 'none';
        volume_off.style.display = 'block';
    }
}