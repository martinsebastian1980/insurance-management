import "dotenv/config";
import fs from "fs/promises";
import Account from "./models/account.model.js";
import connectDB from "./config/database.js";

const migrateAccounts = async () => {
    try {
        await connectDB();
        const data = await fs.readFile("./data/accounts.json","utf-8");
        const accounts = JSON.parse(data);
                console.log(`Clientes encontrados en JSON: ${accounts.length}`);
            await Account.deleteMany({});
            await Account.insertMany(accounts);
                console.log("Clientes migrados correctamente a MongoDB");
        const total = await Account.countDocuments();
                console.log(`Clientes en MongoDB: ${total}`);
    } catch (error) {
        console.error("Error durante la migración:", error);
    } finally {
        process.exit();
    }
};

migrateAccounts();