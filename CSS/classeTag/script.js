const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#388e3c',
    nav: '#388e3c',
    main: '#388e3c',
    footer: '#388e3c',
    form: '#388e3c',
    body: '#388e3c',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}


document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()
    box.style.borderColor = colors.get(tagName)

    if(!box.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label,box.childNodes [0])
    }
})