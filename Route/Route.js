
const express = require('express');
const custcontroller= require('../Controller/custcontrol')
const serviceControl=require('../Controller/servicecontrol')
const router = express.Router();


router.get('/', custcontroller.getSignup);

router.post('/submit', custcontroller.getSignup);

router.get('/list',custcontroller.getList)

router.get('/UpdateList/:id',custcontroller.getUpdateList)

router.post('/updateUser',custcontroller.postUpdateUser)
 
router.get('/Delete/:id',custcontroller.getDeleteUser)

// for services

router.get('/serviceForm',serviceControl.getserviceForm)

router.post('/serviceSubmit', serviceControl.postserviceSubmit);

router.get('/servicelist',serviceControl.servicelist)

router.get('/serviceUpdateList/:id',serviceControl.getserviceUpdateList)

router.post('/serviceupdateUser',serviceControl.postserviceupdateUser)

router.get('/serviceDelete/:id',serviceControl.getserviceDelete)


module.exports = router;