const form = document.querySelector('form')

const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-24' , '01-26' , '01-28'],
    water: ['01-24' , '01-25' , '01-26' , '01-27' , '01-28'],
    food: ['01-24' , '01-25' , '01-26' , '01-27' , '01-28'],
    journal: ['01-25' , '01-26' , '01-27' , '01-31'],
    coffee: ['01-24' , '01-25' , '01-26' , '01-27' , '01-28']
}

nlwSetup.setData(data)
nlwSetup.load()