var fredexp = require('./fredexp.json'); 
var fredact = require('./activity.json'); 

var en_share = 'Feel free to share my site in your preferred social networks'; 
var en_about = 'Find out more about me here:'; 

var locals = {
        title           :   'Frederic Fok',
        description     :   'Frederic Fok - My personal web site',
        author          : 	'Frederic Fok',
        url_ref         :   'https://sites.google.com/site/fredericfok/',
        url_linkedin    :   'http://www.linkedin.com/in/fredericfok', 
        img_linkedin    :   'https://sites.google.com/site/fredericfok/home/linkedin_80x21.gif',
        url_500px       :   'http://500px.com/fredericfok/',
        img_500px       :   'http://500px.com/unity/img/header/500px.png',
        url_twitter     :   'https://twitter.com/fredericfok', 
        share           :   en_share, 
        about           :   en_about
};


var content = {
    en:     {
        intro               : fredexp['intro'].en,
        recent_work_title   : fredexp['recent_work'].title_en,
        recent_work         : fredexp['recent_work'].en, 
        int_pro_title       : fredexp['int_pro'].title_en, 
        int_pro             : {"t1": fredexp['int_pro']['en']['en_01']
                                ,"t2": fredexp['int_pro']['en']['en_02']
                                ,"t3": fredexp['int_pro']['en']['en_03']},
        int_perso_title     : fredexp['int_perso'].title_en, 
        int_perso           : {"t1": fredexp['int_perso']['en']['en_01']
                                ,"t2": fredexp['int_perso']['en']['en_02']
                                ,"t3": fredexp['int_perso']['en']['en_03']}
    }
    ,fr: {
        intro               : fredexp['intro'].fr, 
        recent_work_title   : fredexp['recent_work'].title_fr,
        recent_work         : fredexp['recent_work'].fr,
        int_pro_title       : fredexp['int_pro'].title_fr, 
        int_pro             : { "t1": fredexp['int_pro']['fr']['fr_01']
                                ,"t2": fredexp['int_pro']['fr']['fr_02']
                                ,"t3": fredexp['int_pro']['fr']['fr_03']}, 
        int_perso_title     : fredexp['int_perso'].title_fr, 
        int_perso           : {"t1": fredexp['int_perso']['fr']['fr_01']
                                ,"t2": fredexp['int_perso']['fr']['fr_02']
                                ,"t3": fredexp['int_perso']['fr']['fr_03']}
    }
}

var activities = {
        en: [
                fredact['activity_11']['en'], 
                fredact['activity_10']['en'],
                fredact['activity_9']['en'],
                fredact['activity_8']['en'],
                fredact['activity_7']['en'],
                fredact['activity_6']['en'],
                fredact['activity_5']['en'],
                fredact['activity_4']['en'],
                fredact['activity_3']['en'],
                fredact['activity_2']['en'],
                fredact['activity_1']['en']
            ]
        ,fr: [
                fredact['activity_11']['fr'], 
                fredact['activity_10']['fr'],
                fredact['activity_9']['fr'],
                fredact['activity_8']['fr'],
                fredact['activity_7']['fr'],
                fredact['activity_6']['fr'],
                fredact['activity_5']['fr'],
                fredact['activity_4']['fr'],
                fredact['activity_3']['fr'],
                fredact['activity_2']['fr'],
                fredact['activity_1']['fr'],
        ]
}    

var init_lang = function(req){
    lang = req.query['lang']; 
    if (lang === undefined) { 
        lang = 'en'; 
    }
    if (lang === 'fr')
    {
        locals.share="Partagez librement sur vos réseaux sociaux préférés!"
        locals.about="plus d'information sur moi: "
    }else{
        locals.share= en_share; 
        locals.about= en_about; 
    }
    return lang; 
}

/*
 * GET home page.
 */

exports.index = function(req, res){

    //locals.lang = req.query['lang']; 
    locals.lang = init_lang(req);
  
    locals.content = content[locals.lang]; 

//    console.log('content='+JSON.stringify(locals.content['int_pro'].t1)); 
    res.render('ff.ejs', locals)
};

exports.experience = function(req, res){
    locals.lang = init_lang(req); 
    locals.activities = activities[locals.lang]; 
    res.render('experience.ejs', locals)
};

exports.notfound = function(req, res){
    res.render('404.ejs', locals)
};
