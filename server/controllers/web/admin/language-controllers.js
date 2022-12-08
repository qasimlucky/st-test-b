const express = require('express');
const multer  = require('multer');
const Language = require('../../../models/movies/languages')
const { success, error, validation } = require("../../../helpers/apiResponse");


var flagstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "server/public/flags")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now()+".jpg");
        var filePath = file.fieldname + "-" + Date.now()+".jpg";

    } 
});


const AddLanguage = async function (req, res){
      console.log(req.body)
    try {
        console.log(req.file)
        console.log(req.body)
        console.log("this is upload flag")
        const  flag=("http://localhost:7000/static/"+req.file.filename);

        const {language_title,keyword,world_best,movies_of_this_season,sign_in,sign_up,download_favourites,it_supper_easy,whats_New_on_salomtv,terms_and_conditions,watch_anywhere_you_want,watch_an_endless
            ,popuplar_movies_and_shows,play_now,more_details,trendin_see_all,your_fovourites,featured_movies_to_watch_now,upcoming_movies
            ,watch_now,tv_thrillers,see_all,home,tv_show,serials,movies,watch_list,kids_section,my_profile,pricing_plan,logout
            ,movie_categories,tv_series,support,privacy_policy,account_setting,edit,user_name,user_description,personal_details
            ,email,Password,phone_number,date_of_birth,language,billing_details,your_next_billing_date_is,cancel_membership,
            plan_details,change,update_payment_info,change_plan,new_movies,salomtv_special,america_tv_shows,hollywood_movies,
            video_quality,add_free_entertainment,purchase,forgot_your_password,remember_me,dont_have_an_account,i_accept_terms_and_conditions
            ,i_accept,alread_have_an_account,sign_up_u,crime,drama,mystery,add_to_favourites,more_like_this,favourites} = req.body;
        const languageList = await Language.find();
        console.log(languageList.length)
        if (languageList.length ==0 ){
            lang_collection_index = 0;
            console.log(lang_collection_index)
        }else{
           Robject =languageList.slice(-1).pop()
           lang_collection_index  =Robject.lang_collection_index ;
        }
        console.log(lang_collection_index)
        var lang_id = 'st-lang-'+(Number(lang_collection_index)+1);
          console.log(lang_id)
          lang_collection_index = (Number(lang_collection_index)+1)
        console.log(lang_collection_index)
        var cLanguage = await Language.create({
            lang_id,
            lang_collection_index,
            language_title,
            keyword,
            flag,
            world_best,movies_of_this_season,sign_in,sign_up,download_favourites,it_supper_easy,whats_New_on_salomtv,terms_and_conditions,watch_anywhere_you_want,watch_an_endless
            ,popuplar_movies_and_shows,play_now,more_details,trendin_see_all,your_fovourites,featured_movies_to_watch_now,upcoming_movies
            ,watch_now,tv_thrillers,see_all,home,tv_show,serials,movies,watch_list,kids_section,my_profile,pricing_plan,logout
            ,movie_categories,tv_series,support,privacy_policy,account_setting,edit,user_name,user_description,personal_details
            ,email,Password,phone_number,date_of_birth,language,billing_details,your_next_billing_date_is,cancel_membership,
            plan_details,change,update_payment_info,change_plan,new_movies,salomtv_special,america_tv_shows,hollywood_movies,
            video_quality,add_free_entertainment,purchase,forgot_your_password,remember_me,dont_have_an_account,i_accept_terms_and_conditions
            ,i_accept,alread_have_an_account,sign_up_u,crime,drama,mystery,add_to_favourites,more_like_this,favourites

        });
          res.send(cLanguage)
    } catch (error) {
        res.send(error)     
    }

}

const getAllLanguage = async function (req, res){    
    try {
        const List = await Language.find();
        console.log(List)
        const{keyword}=req.body;
        const languageList = await Language.find({keyword:keyword});
        console.log(languageList)
        res.send(languageList)
    } catch (error) { 
        res.send(error)   
    }
}


module.exports = {
    AddLanguage,
    flagstorage,
    getAllLanguage
}