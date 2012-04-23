var routes = require('./routes'); 
var m_app = require('./app.js').init(process.env.PORT);

m_app.get('/', routes.index);
m_app.get('/home.html', routes.index);
m_app.get('/experience', routes.experience);

/* The 404 Route (ALWAYS Keep this as the last route) */
m_app.get('*', routes.notfound); 


