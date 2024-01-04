import Setting from '../models/setting.js';

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
