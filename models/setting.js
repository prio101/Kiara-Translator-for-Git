import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Setting = sequelize.define('Setting', {
    repo_owner: DataTypes.STRING,
    expires_at: DataTypes.DATE,
    access_token: DataTypes.STRING,
    repo_name: DataTypes.STRING,
}, {
    tableName: 'settings',
    timestamps: false,
    underscored: true,
});

export default Setting;