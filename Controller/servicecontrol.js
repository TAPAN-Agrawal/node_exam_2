const Service = require('../model/service')
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ejs = require('ejs');
exports.getserviceForm = async (req, res) => {
 
    
    res.render('serviceForm');

}

exports.postserviceSubmit=async (req,res)=>{

       try {

        const service = new Service({

          
            customerName:req.body.customerName,
            vehicleNumber:req.body.vehicleNumber,
            pickupDate:req.body.pickupDate,
            dropDate:req.body.dropDate,
            location:req.body.location,
            servicePrice:req.body.servicePrice,
            payableAmount:req.body.payableAmount 

        })
        const savedData = await service.save()
        console.log(savedData);
        res.render('serviceForm');
        // res.redirect('/list')
        
    } catch (error) {
        console.log(error);

    }
}


exports.servicelist=async(req,res)=>{
    const users = await Service.find({});
    console.log(users);
    res.render('serviceTable', {
        users: users
    })

}

exports.getserviceUpdateList= async (req, res) => {


    console.log(req.params.id);
    const userDetail = await Service.findById({ _id: req.params.id })
    console.log(userDetail);
    res.render('serviceUpdateform', {
        user: userDetail
    })

}
exports.postserviceupdateUser = async (req, res) => {
    const {
        id,
        customerName,
        vehicleNumber,
        servicePrice,
        payableAmount,
       

    } = req.body
    const userUpdated = await Service.updateOne({
        _id: id
    }, {
        $set: {
            customerName,
            vehicleNumber,
            servicePrice,
            payableAmount,
           
        }
    })
    console.log(userUpdated);
    res.redirect('/servicelist')
}

exports.getserviceDelete = async (req, res) => {
    console.log(req.params.id);
    const userDetail = await Service.deleteOne({ _id: req.params.id })
    console.log(userDetail);
    res.redirect('/servicelist')
}