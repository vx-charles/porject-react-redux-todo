const mongoose = require('mongoose')

//API de Promise do mongoose vai usar o API de Promise do Node. Isso é para
// remover a mensagem de depreciação ou advertência quando acontecer.
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})