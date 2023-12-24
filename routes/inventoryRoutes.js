const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController');
const router = express.Router();


//ADD INVERNTORY || POST
router.post('/create-inventory', authMiddleware, createInventoryController);

router.get('/get-inventory', authMiddleware, getInventoryController);
router.get('/get-recent-inventory', authMiddleware, getRecentInventoryController);
router.post('/get-inventory-hospital', authMiddleware, getInventoryHospitalController);


router.get('/get-donars', authMiddleware, getDonarsController);
router.get('/get-hospitals', authMiddleware, getHospitalController);
router.get('/get-organisation', authMiddleware, getOrgnaisationController);
router.get('/get-organisation-for-hospital', authMiddleware, getOrgnaisationForHospitalController);

module.exports = router;