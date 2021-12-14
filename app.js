//Set server
const express = require('express');
const app = express();
app.listen(8000, () => console.log(`Browser is running at port 8000`));

//SET flash message
const flash = require('connect-flash');
app.use(flash());

//set body-parser
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//set session
const session = require('express-session');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

//set message
app.use((req,res, next)=>{
	res.locals.message = req.session.message
	delete req.session.message
	next()
})


//stactic folder
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//Set View
app.set('views',  'views');
app.set('view engine', 'ejs');

//Route
require('./routers/eventRouter')(app);
require('./routers/authRouter')(app);
require('./routers/siteRouter')(app);
require('./routers/profileRouter')(app);
require('./routers/adminRouter')(app);
require('./routers/statisticRouter')(app);

