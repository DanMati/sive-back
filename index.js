const config = require('./config/config')

const app = config()

app.listen(4000, () => console.log('sive'))

app.get('/', (req, res) => res.send('Sive') )