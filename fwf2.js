const aplicacion = document.querySelector(".container");
const getUrl = new URLSearchParams(window.location.search)
search = getUrl.get("name.common")


const url = "https://restcountries.com/v3.1/name/{common}"

const flugs2 = async () => {
    let res = await fetch(`${url}/${search}`)
    let data = await res.json()
    console.log(`${url}/${search}`);

}
flugs2()
console.log(name)

//HASTA AQUI LLEGUE, LO TERMINARE MAÑANA...