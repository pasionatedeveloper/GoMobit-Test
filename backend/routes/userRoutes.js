const express= require('express');
const app = express();
const router = express.Router();

const {registerUser,getAllUsers} = require('../controllers/userControllers');


router.route('/user/register').post(registerUser);
router.route('/user/get-all-users').get(getAllUsers);




module.exports=router;