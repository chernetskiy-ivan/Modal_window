const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://m.dom-eda.com/uploads/images/catalog/item/dfc9a3e974/3cbf3bd41c_1000.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://st3.depositphotos.com/1020804/12760/i/600/depositphotos_127608560-stock-photo-mango-cubes-and-mango-fruit.jpg'}
]

const toHTML = fruit => `
        <div class="col">
            <div class="card">
                <img class="card-img-top" style="height: 300px;" src="${fruit.img}" alt="${fruit.title}">
                <div class="card-body">
                    <h5 class="card-title">${fruit.title}</h5>
                    <a href="#" class="btn btn-primary" data-btn="price">Посмотреть цену</a>
                    <a href="#" class="btn btn-danger">Удалить</a>
                </div>
            </div>
        </div>`

function render() {
    const html = fruits.map(fruit => toHTML(fruit)).join('')
    document.querySelector('#fruits').innerHTML = html
}

render()

const modal = $.modal({
    title: 'Ivan Modal',
    closable: true,
    content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
`,
    width: '400px',
    footerButtons:[
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn clicked')
                modal.close()
            }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Danger btn clicked')
                modal.close()
            }}
    ]
})

document.addEventListener('click', event => {
    //отмена default поведение
    event.preventDefault()

    const btnType = event.target.dataset.btn

    if(btnType === 'price') {
        console.log('price')
    }
})