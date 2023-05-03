const express = require('express');
const app = express();
app.use(express.static('public'));
// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Usuario Pug' });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
  res.render('index.ejs', { nombre: 'Usuario EJS' });
});

app.get('/perfil/:id', (req, res) => {
    const userId = req.params.id;
    // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
    const user = { id: userId, nombre: 'Usuario ' + userId };
    res.render('perfil', { user: user });
  });

  const elements = [
    {
      imagen: 'https://picsum.photos/id/237/800/600',
      titulo: 'IN',
      descripcion: 'Despite the darkest night'
    },
    {
      imagen: 'https://picsum.photos/id/238/800/600',
      titulo: 'THE FINAL',
      descripcion: 'So lets drown the sky tonight'
    },
    {
      imagen: 'https://picsum.photos/id/239/800/600',
      titulo: 'VIEW',
      descripcion: 'Just to the sunset'
    },
    {
      imagen: 'https://picsum.photos/id/240/800/600',
      titulo: 'WITH ALL',
      descripcion: 'Trying not to fall under'
    },
    {
      imagen: 'https://picsum.photos/id/241/800/600',
      titulo: 'WE HAVE',
      descripcion: 'Crossing of the eyes'
    }
  ];

  // Ruta para renderizar la plantilla Pug
app.get('/miplantilla-pug', (req, res) => {
    const imagen = "./images/logo.png"
    
    res.render('miplantilla', { mensaje: '¡Hola desde la plantilla Pug!' , elements});
  });
  
  // Ruta para renderizar la plantilla EJS
  app.get('/miplantilla-ejs', (req, res) => {
    const imagen = "./images/logo.png"
    res.render('miplantilla.ejs', { mensaje: '¡Hola desde la plantilla EJS!' , elements});
  });
  
  

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
