console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', ()=>{
    grabImages()

    document.getElementById('breed-dropdown').addEventListener('change', () =>{
        handleDropdown()
    }) 
})

function handleDropdown(){
    const dropdown = document.getElementById('breed-dropdown')
    const breedsList = document.getElementById('dog-breeds')
    breedsList.innerHTML = ''
    const userChoice = dropdown.value
    getBreeds(userChoice)
}

function getBreeds(userChoice){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp=>resp.json())
    .then(data=>{
        const breeds = data.message
        const breedsList = document.getElementById('dog-breeds')
        
        for(const breed in breeds){
            const breedElement = document.createElement('li')
            breedElement.textContent = `${breed}`
            if(breed.charAt(0)===userChoice){
                breedsList.appendChild(breedElement)
            }             
            breedElement.addEventListener('click', ()=>{
                breedElement.style.color = 'red'
            })
        }
    })
}

function grabImages(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp=>resp.json())
    .then(data=>{
        const images = data.message
        for(const dog in images){
            const img =  document.createElement('img')
            const container = document.getElementById('dog-image-container')
            img.src = images[dog]

            container.appendChild(img)
        }
    })
}