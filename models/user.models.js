import mongoose from "mongoose";

const FormDataSchema = new mongoose.Schema({
    promoCode:{
        type: String, 
        required : true
    },
    hearAboutUs: {type : String , required : true},
    cityCountry: {type : String,required : true},
    talentName: {
        type : String,
        required : true
    },
    applicantName:{ type : String,required : true } ,
    relationship: {type : String} ,
    trainingCenter: {
        type : String,
        required : true
    },
    dreamsArticle:{ 
        type : String
       
    },
    photoCredit: {type : String,},
    instaLink: {
        type: String,
       
       
    },
    facebookLink: {
        type : String,
       
       
       
        
    },
    
    photos: {
        type : Array,
        required : true,
    } 
},{timestamps : true});

export const FormData = mongoose.model('FormData', FormDataSchema);

