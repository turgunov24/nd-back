// imports
import { Sequelize } from "sequelize";

// defines

const sequelize = new Sequelize("postgres", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { dbConnection, sequelize };
