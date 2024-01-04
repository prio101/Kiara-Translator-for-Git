import Setting from '../models/setting.js';
import { seedSettings } from '../seeds/settings.js';

// Responsible for the Syncing of the database
// With Model Attributes.
// Should be ran after any Migration Changes happened into the model schema.
export const getSync = async (req, res) => {
    try {
        Setting.sync({ alter: true });
        let settings = await Setting.findAll();
        res.status(200).json({data: "Updated the schema successfully", settings: settings});
    } catch (error) {
        Setting.sync({ alter: true });
        res.status(500).json({ error: error.message });
    }
}


export const postSeed = async (req, res) => {
    try {
        let result = await seedSettings();
        res.status(200).json({data: "Seeded the database successfully", result: result});
    }catch{
        res.status(500).json({ error: error.message });
    }
}