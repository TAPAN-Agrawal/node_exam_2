const Employee = require('../model/customer')
const multer  = require('multer');
exports.getSignup = async (req, res) => {
    try {

        const employee = new Employee({

            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            dob: req.body.dob,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            country: req.body.country,
            address: req.body.address,
            // image: req.body.image,
            // document: req.body.document

        })
        const savedData = await employee.save()
        console.log(savedData);
        // res.render('Form');
        // res.redirect('/list')
        res.status(201).json(savedData);
        
    } catch (error) {
        console.log(error);

    }

}

exports.getList = async (req, res) => {
    const users = await Employee.find();
    // console.log(users);
    res.render('Table', {
        users: users
    })
    // res.status(200).json(users);
}

exports.getUpdateList = async (req, res) => {


    console.log(req.params.id);
    const userDetail = await Employee.findById({ _id: req.params.id })
    console.log("userdetails:",userDetail);
    res.render('Updateform', {
        user: userDetail
    })

}

exports.postUpdateUser = async (req, res) => {
    const {
        id,
        name,
        email,
        phone,
        country,
        image,
        document

    } = req.body
    const userUpdated = await Employee.updateOne({
        _id: id
    }, {
        $set: {
            name,
            email,
            phone,
            country,
            image,
            document
        }
    })
    console.log(userUpdated);
    res.redirect('/list')
}

exports.getDeleteUser = async (req, res) => {
    console.log(req.params.id);
    const userDetail = await Employee.deleteOne({ _id: req.params.id })
    console.log(userDetail);
    res.redirect('/list')
}

