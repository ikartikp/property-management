var express = require('express');
const propertyCollection = require('../models/propertyd');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
try {
  res.render('index', { title: 'HOME PAGE' });
} catch (error) {
  console.log(error.message);
  console.log("error in home page")
}
});


// get collection page
router.get('/collection',async function(req,res,next){
  try {
    const property = await propertyCollection.find()
    
    res.render("collection",{title:"COLLECTION PAGE",property})
  } catch (error) {
    console.error(error.message);
    console.log("error in collection ")
  }
})


router.get('/contact',function(req,res,next){
  try {
    res.render("contact",{title:"CONTACT PAGE"})
  } catch (error) {
    console.log(error.message)
    console.log("error in contact")
  }
})

router.get('/register',function(req,res,next){
  try {
    res.render("register",{title:"REGISTER PAGE"})
  } catch (error) {
    console.log(error.message)
    console.log("error in register")
  }
})
// rgister post route jo data store kare ga db mai
router.post('/register',async function(req,res,next){
  
  try {
    const property =await new propertyCollection(req.body)
    await property.save()
    await console.log("property created");
    res.redirect("/collection")
  } catch (error) {
    console.error(error.message)
    console.log("error in register")
    
  } 
})

router.get('/details/:id', async function(req,res,next){
  try {
    const id=req.params.id
    const details= await propertyCollection.findById(id)
    // await console.log(details);
    res.render("details",{title:"PROPERTY DETAILS",details})
  } catch (error) {
    console.log(error.message);
    console.log("error in details")
  }
})
router.get('/delete/:id', async function(req,res,next){
  try {
    const id=req.params.id
    const details= await propertyCollection.findByIdAndDelete(id)
    res.redirect("/collection")
  } catch (error) {
    console.log(error.message);
    console.log("error in delete")
}
})

module.exports = router;
