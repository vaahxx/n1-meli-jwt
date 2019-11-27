const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController")
const authMiddleware = require('../middlewares/auth')

router.get("/", controller.get)
router.use(authMiddleware);
//todas as rotas a partir de aqui passarão pelo middleware
router.get("/nasceuSp", controller.getSp)
router.get("/:id", controller.getById)
router.get("/:id/books", controller.getBooks)
router.get("/:id/getAge", controller.getAge)
router.post("/", controller.post)
router.post("/:id/books", controller.postBooks)

module.exports = router
