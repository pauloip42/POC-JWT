const express = require('express'); 
const app = express(); 
require("dotenv-safe").config();

const auth = require('./routes/auth');
const logout = require('./routes/logout');
const getUsers = require('./routes/getUsers');

const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

// app.get('/', (req, res, next) => {
//     res.json({message: "Tudo ok por aqui!"});
// })

// //authentication
// app.post('/login', (req, res, next) => {
//     //esse teste abaixo deve ser feito no seu banco de dados
//     if(req.body.user === 'paulo' && req.body.password === '123'){
//       //auth ok
//       const id = 1; //esse id viria do banco de dados
//       const token = jwt.sign({ id }, process.env.SECRET, {
//         expiresIn: 300 // expires in 5min
//       });
//       return res.json({ auth: true, token: token });
//     }
    
//     res.status(500).json({message: 'Login inválido!'});
// })

// app.post('/logout', function(req, res) {
//     res.json({ auth: false, token: null });
// })

// app.get('/users', verifyJWT, (req, res, next) => { 
//     console.log("Retornou todos users!");
//     res.json([{id:1,nome:'paulo'}]);
// })

app.use('/login', auth);
app.use('/logout', logout);
app.use('/users', getUsers);


app.listen(3000, () => {console.log("Servidor escutando na porta 3000...")});

// function verifyJWT(req, res, next){
//     const token = req.headers['x-access-token'];
//     if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
//     jwt.verify(token, process.env.SECRET, function(err, decoded) {
//       if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
//       // se tudo estiver ok, salva no request para uso posterior
//       req.userId = decoded.id;
//       next();
//     });
// }