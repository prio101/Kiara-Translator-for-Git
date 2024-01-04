import TranslationAction from "../models/translationAction.js";
import Setting from "../models/setting.js";

// Will Seed the database once called

export const seedTranslationAction = async (req, res) => {
    const setting = await Setting.findOne({ where: { id: 1 } });

    try {
        if (!setting) {
            throw new Error('Setting not found!');
        }

        let action = await TranslationAction.create({
            
                title: 'Some Name Titile',
                settingId: setting.id,                
        })
        return action;
    }
    catch (error) {
        console.error(error.message);
    }
}