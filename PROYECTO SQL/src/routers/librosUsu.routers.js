const {Router} = require('express');
const router = Router();
const userUsuRouter = require("../controller/librosUsu.controller")

router.get('/libros1', userUsuRouter.getLibros1)

router.get('/libros1id', userUsuRouter.getLibrosId)

router.post('/libros1', userUsuRouter.postLibro1)

router.put('/libros1' , userUsuRouter.putLibro1)

router.delete('/libros1' , userUsuRouter.deleteLibro1)


module.exports= router
