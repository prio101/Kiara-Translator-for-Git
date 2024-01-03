import Setting from '../../models/setting.js';


export const getDashboard = (req, res) => {
    res.render('admin/dashboard', { title: 'Dashboard' });
}

export const getSettingList = async (req, res) => {
    let settings = await Setting.findAll();
    console.log(settings);
    res.render('admin/settings/index', { title: 'Settings' });
}

export const getSetting = (req, res) => {
    res.render('admin/settings/new', { title: 'Settings' });
}

export const createSetting = async (req, res) => {
    res.render('admin/settings/new', { title: 'Settings' });
    // try {   
    //     if(res.status == 201) {
    //         res.redirect('/web/admin/settings');
    //     }
    //     else {
    //         throw Exception('Error creating setting');
    //     }
    // } catch (error) {
    //     console.log(error);
    //     res.render('admin/settings/new', { title: 'Settings' });
    // }
}


export const getAction = (req, res) => {
    res.render('admin/actions/new', { title: 'Actions' });
}
