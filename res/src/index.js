const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})

const my_names = ["Samuel", "GamingCraft", "Sakura", "Emily"]
const pronous_list = ["he/him", "he/him", "she/her", "she/her"]

const my_name = my_names[params.name] || 'Samuel'
const my_pronouns = pronous_list[params.name] || 'he/him'

const constants = {
    'name': my_name,
    'lname': my_name.toLowerCase(),
    'pronouns': my_pronouns,
    'year': new Date().getFullYear()
}

document.title = `${my_name}302`

for (const node of document.getElementsByClassName('const')) {
    node.innerHTML = node.innerHTML.replace(/%\S*%/g, match => {
        const query = match.replace(/%/g, '')
        return constants[query] || params[query] || match
    })
}

// min and max included 
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

document.getElementById('bg').style.backgroundImage = `url('/res/img/wallpapers/export${rand(1, 4)}.png')`

const height = document.body.offsetHeight
const width = document.body.offsetWidth

const onscroll = async () => {
    const result = window.scrollY - (window.scrollY * (window.scrollY / height) / height) * width
    document.getElementById('bg').style.top = `${result}px`
}

onscroll()
window.onscroll = onscroll