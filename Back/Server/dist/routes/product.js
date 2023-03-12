"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const router = (0, express_1.Router)();
router.get('/', product_1.getProducts);
router.get('/:id', product_1.getOne);
router.post('/', product_1.createe);
router.delete('/:id', product_1.deletee);
router.put('/:id', product_1.updatee);
exports.default = router;