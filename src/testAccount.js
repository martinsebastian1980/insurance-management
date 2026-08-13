import "dotenv/config";
import connectDB from "./config/database.js";
import Account from "./models/account.model.js";

const test = async () => {
    await connectDB();

    try {
        const account = await Account.create({
            id: 100,
            firstName: "Cliente",
            lastName: "Prueba",
            dni: "99999999",
            phone: "3510000000",
            email: "prueba@correo.com",
            status: "ACTIVE"
        });

        console.log("Cliente creado correctamente:");
        console.log(account);

    } catch (error) {
        console.error("Error al crear cliente:", error);
    } finally {
        process.exit();
    }
};

test();