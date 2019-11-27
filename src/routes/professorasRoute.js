const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")
const authMiddleware = require('../middlewares/auth')

router.get("/", controller.get)
router.use(authMiddleware);
//todas as rotas a partir de aqui passarão pelo middleware
router.get("/:id", controller.getById)
router.post("/", controller.post)

module.exports = router
