import Service from '../service/service.js'

const createCard = async (req, res, next) => {
    try {
    const Item = {  
        name: req.body.name,
        age: req.body.age
    }
    
    await Service.addCard(Item);
    res.send(`<h1>Данные успешно отправлены</h1><a href='/index.html'>Back to main page</a>   Данные:` + JSON.stringify(Item))
    next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
    
}

export default {
	createCard

}
