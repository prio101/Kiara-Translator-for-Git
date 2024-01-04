import path from 'path';
// Import necessary Sequelize modules
import { DataTypes, Model, Sequelize } from 'sequelize';
// import sequelize from './your-sequelize-instance'; // Make sure to replace with your Sequelize instance
import Setting from './setting.js';

export const sequelize = new Sequelize('','' ,'', {
   dialect: 'sqlite',
   storage: path.resolve('db', 'database.sqlite'),
   logging: (...msg) => console.log(msg)
})

// Define the Action model class
class TranslationAction extends Model {}

// Initialize the Action model with the sequelize instance and define attributes
TranslationAction.init(
  {
    // Define model attributes here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
  },
  {
    sequelize, // Pass the sequelize instance
    modelName: 'TranslationAction', // Set the model name
  }
);

TranslationAction.belongsTo(Setting, { foreignKey: 'settingId' });

// Export the Action class to use in other parts of your application
export default TranslationAction;
