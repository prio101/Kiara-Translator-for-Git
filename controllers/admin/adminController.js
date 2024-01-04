import Setting from '../../models/setting.js';
import TranslationAction from '../../models/translationAction.js';
import { seedSettings } from '../../seeds/settings.js';
import { seedTranslationAction } from '../../seeds/translationActions.js';


export const getDashboard = (req, res) => {
    res.render('admin/dashboard', { title: 'Dashboard' });
}

export const getSettingList = async (req, res) => {
    let settings = await Setting.findAll();
    console.log(settings);
    // throw new Error("Something went wrong");
    res.render('admin/settings/index', { title: 'Settings', settings });
}

export const getSetting = (req, res) => {
    res.render('admin/settings/new', { title: 'Settings', errors: [] });
}

// create a new setting
// param: 
// req.body.title
// req.body.repoName
// req.body.repoOwner
// req.body.accessToken
// req.body.openAiSecret

export const createSetting = async (req, res) => {
    console.log("Creating a new setting", req.body)
    if(!req.body.title || !req.body.repoName || !req.body.repoOwner || !req.body.accessToken || !req.body.openAiSecret){
        res.render('admin/settings/new', { title: 'Settings', error: "Please fill in all the fields" });
    }
    let { title, repoName, repoOwner, accessToken, openAiSecret } = req.body;
    console.log(title, repoName, repoOwner, accessToken, openAiSecret)
    try {
        let setting = await Setting.create({
            title: title,
            repoName: repoName,
            repoOwner: repoOwner,
            accessToken: accessToken,
            openAiSecret: openAiSecret
        });
        res.render('admin/settings', { title: 'Settings', setting: setting });
    }catch{
        res.render('admin/settings/new', { title: 'Settings', errors: ["Could not create the Setting."] });
    }
}


export const getAction = (req, res) => {
    res.render('admin/actions/new', { title: 'Actions' });
}


// Responsible for the Syncing of the database
// With Model Attributes.
// Should be ran after any Migration Changes happened into the model schema.
export const postSync = async (req, res) => {
    console.log("Syncing the database")
    try {
        Setting.sync({ alter: true });
        TranslationAction.sync({ alter: true });
        let settings = await Setting.findAll();
        let actions = await TranslationAction.findAll();
        res.status(200).json({ data: "Updated the schema successfully", results: { actions, settings } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// API endpoint to enlist the seeders file function from /seed/**.js 
// and run the function to seed the database.
// For quicker demonstration.
export const postSeed = async (req, res) => {
    try {
        let settings = await seedSettings();
        let actions = await seedTranslationAction();
        res.status(200).json({data: "Seeded the database successfully", results: { actions, settings }});
    }catch{
        res.status(500).json({ error: error.message });
    }
}