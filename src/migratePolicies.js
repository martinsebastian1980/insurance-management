import "dotenv/config";
import fs from "fs/promises";
import Policy from "./models/policy.model.js";
import connectDB from "./config/database.js";

const migratePolicies = async () => {
    try {
        await connectDB();

        const data = await fs.readFile(
            "./data/policies.json",
            "utf-8"
        );

        const policies = JSON.parse(data);

        console.log(`Pólizas encontradas en JSON: ${policies.length}`);

        await Policy.deleteMany({});

        await Policy.insertMany(policies);

        console.log("Pólizas migradas correctamente a MongoDB");

        const total = await Policy.countDocuments();

        console.log(`Pólizas en MongoDB: ${total}`);

    } catch (error) {
        console.error("Error durante la migración:", error);
    } finally {
        process.exit();
    }
};

migratePolicies();