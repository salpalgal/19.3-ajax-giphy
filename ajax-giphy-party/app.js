console.log("Let's get this party started!");

function formInput(){

    const input = document.querySelector("#search")
    const searchForm= document.querySelector("#searchForm")
    const buttton = document.querySelector("#submit")
    buttton.addEventListener("click",function(e){
        e.preventDefault()
    getGif(input.value)
    
    input.value=""
})
}

async function getGif(q){
    let createGif = document.createElement("img")
    let createBtn = document.createElement("button")
    let createDiv=document.createElement("div")
    createBtn.id="removeBtn"
    createBtn.innerText="remove"
    const body = document.querySelector("#body")
    const rand = Math.floor(Math.random()*51)
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    const data = res.data.data
    for(const[i,v] of data.entries()){
        if(i==rand){
            console.log(i,v.url)
            createGif.src=v.images.original.url
            createDiv.append(createGif)
            createDiv.append(createBtn)
            
            body.append(createDiv)
        }
    }
createBtn.addEventListener("click",function(e){
    e.preventDefault();
    createBtn.parentElement.remove()
})}



formInput()


