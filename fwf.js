const url = "https://restcountries.com/v3.1/all";
const aplicacion = document.querySelector(".marco")

const flugs = async () => {
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
    
    data.forEach (async (country)=> {
        //await console.log(country.name.official)
        
        let div = document.createElement("div")
        //console.log(country.name.common)
        //div.setAttribute("id", country.idd.root)
        div.classList.add("target")
        div.innerHTML += `
        <img src="${country.flags.png}">
        <p>${country.name.official}</p>
        <p>${country.population}</p>
        <p>${country.region}</p>
        <p>${country.capital}</p>
        <button class="btn">More</button>

        `
        div.addEventListener("click", function(){
            window.location.href = `./index.html?name=${country.name.common}`
        })
        aplicacion.appendChild(div)



    })



}
flugs();

 