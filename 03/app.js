const input = document.querySelector('input')

if (input) {

    const prototypeEl = document.querySelector('.images-list__item--prototype')
    const ul = document.querySelector('.images-list')

    input.addEventListener('change', function (e) {
        const filesList = Array.from(e.target.files)

        filesList.forEach(element => {
            const li = prototypeEl.cloneNode(true)
            const header = li.querySelector('header')
            const footer = li.querySelector('footer')

            header.innerText = element.name
            console.log(header)
            footer.innerText = element.size / 1024 * 1024
            li.style.display = 'block'
            //li.classList.remove('images-list__item--prototype')

            ul.appendChild(li)

        });

    });

}


