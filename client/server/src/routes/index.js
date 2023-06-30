const express = require('express');
const router = express.Router();

const {getCharById} = require('../controllers/getCharById');
// const {login} = require('../controllers/login');
// const {postFav, deleteFav} = require('../controllers/handleFavorites');

const  login  = require('../controllers/login')
const postUser = require('../controllers/postUser')
const postFav = require('../controllers//postFavs')
const deleteFav = require('../controllers/deleteFav')



router.get('/character/:id', (req, res) => {
    getCharById(req, res);
  });

  

router.get('/login',login );
router.post('/login',postUser );
router.post('/fav',postFav );
router.delete('/fav/:id',deleteFav );
router.get('/character/:id',getCharById );

// foroma simplificada de ruta
// router.get('/login', login);


// router.post('/fav', (req, res) => {
//   postFav(req, res);
// });


// router.delete('/fav/:id', (req, res) => {
//   deleteFav(req, res);
// });

module.exports = router;