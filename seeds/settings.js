import Setting from "../models/setting.js";

// Will Seed the database once called

export const seedSettings = async (req, res) => {
    try {
        await Setting.create({
                title: 'Some Name Titile',
                repoName: 'repoName',
                repoOwner: 'repoOwner',
                accessToken: 'accessToken',
                openAiSecret: 'openAiSecret',
                
        })
    }
    catch (error) {
        console.error(error.message);
    }
}