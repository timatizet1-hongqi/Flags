let parent = document.querySelector(".parent")

let api = "http://localhost:3001/flags"

fetch(api)
    .then(res => res.json())
    .then(data => {

        let input = document.querySelector(".input")

        input.addEventListener("input", () => {
            let value = input.value

            let filteredCountries = data.filter((e) => e.name?.toLowerCase().startsWith(value.toLowerCase()))

            parent.innerHTML = ""

            filteredCountries.forEach(e => {

                let newDiv = document.createElement("div")
                newDiv.classList = "card"

                newDiv.innerHTML = `
            
            <div class="card">
                <img src=${e.img} alt="">
                <p class="card-p">${e.name}</p>
             </div>

            `

                parent.append(newDiv)
            });
        })
    })



