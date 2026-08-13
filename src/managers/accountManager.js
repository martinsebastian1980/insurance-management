import Account from "../models/account.model.js";

class AccountManager{
    async getAccounts() {
        try {
            const accounts = await Account.find().sort({ id: 1 }).lean();
            return accounts;
        } catch (error) {
            console.error("Error al obtener las cuentas:", error);
            return [];
        }
    }

     async addAccount(account) {
        try {
            const lastAccount = await Account.findOne().sort({ id: -1 }).lean();
            const newId = lastAccount ? lastAccount.id + 1 : 1;
            const newAccount = await Account.create({
                id: newId,
                firstName: account.firstName,
                lastName: account.lastName,
                dni: account.dni,
                phone: account.phone,
                email: account.email,
                status: "ACTIVE",
                createdAt: new Date()
            });
            return newAccount;
        } catch (error) {
            console.error("Error al agregar una cuenta:", error);
            return null;
        }
    }

    async getAccountById(id) {
        try {
            const account = await Account.findOne({ id: Number(id) }).lean();
            return account || null;
        } catch (error) {
            console.error("Error al buscar una cuenta:", error);
            return null;
        }
    }

    async updateAccount(id, account) {
        try {
            const updatedAccount = await Account.findOneAndUpdate(
                { id: Number(id) },
                { $set: account },
                { new: true, runValidators: true }
            ).lean();

            return updatedAccount || null;

        } catch (error) {
            console.error("Error al actualizar una cuenta:", error);
            return null;
        }
    }

    async deleteAccount(id) {
        try {
            const updatedAccount = await Account.findOneAndUpdate(
                { id: Number(id) },
                { $set: { status: "INACTIVE" } },
                { new: true, runValidators: true }
            ).lean();
            return updatedAccount || null;
        } catch (error) {
            console.error("Error al eliminar una cuenta:", error);
            return null;
        }
    }

}
export default AccountManager;
/*
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

class AccountManager {

    constructor() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        this.path = path.join(__dirname, "../../data/accounts.json");
    }
   
    async getAccounts(){
            try{
                // leer archivo
                const data = await fs.readFile(this.path, "utf-8");
                // convertir JSON
                const accounts = JSON.parse(data);
                // devolver accounts
                return accounts;
            }catch(error){ 
                console.error("Error al obtener las cuentas:", error);
                return [];
             }
    }
    async addAccount(account) {
            try {
                const accounts = await this.getAccounts();
                const lastAccount = accounts[accounts.length - 1];
                const newId = accounts.length === 0 ? 1 : lastAccount.id + 1;

                const newAccount = {
                                    id: newId,
                                    firstName: account.firstName,
                                    lastName: account.lastName,
                                    dni: account.dni,
                                    phone: account.phone,
                                    email: account.email,
                                    status: "ACTIVE",
                                    createdAt: new Date()
                                    };

                    accounts.push(newAccount);
                await fs.writeFile(this.path,JSON.stringify(accounts, null, 2));
                return newAccount;
            } catch (error) {
                    console.error("Error al agregar una cuenta:", error);
                return null;
            }
}

    async getAccountById(id) {
            try {
                const accounts = await this.getAccounts();
                const account = accounts.find(account => account.id === Number(id));
                return account || null;
            } catch (error) {
                console.error("Error al buscar una cuenta:", error);
            return null;
            }
    }

    
    async updateAccount(id, account) {
            try {

        // obtener cuentas
                const accounts = await this.getAccounts();
        // buscar índice
                const index = accounts.findIndex(account => account.id === Number(id));
        // verificar si existe
                if (index === -1) {
                    return null;
                }
        // actualizar
                accounts[index] = {...accounts[index],...account};
        // guardar
                await fs.writeFile(this.path,JSON.stringify(accounts, null, 2));
        // devolver
                return accounts[index];

            } catch (error) {
                console.error("Error al actualizar una cuenta:", error);
            return null;
            }
    }

    async deleteAccount(id) {
            try {
                const accounts = await this.getAccounts();
                const index = accounts.findIndex(account => account.id === Number(id));
                    if (index === -1) {
                        return null;
                    }
                accounts[index].status = "INACTIVE";
                await fs.writeFile(this.path,JSON.stringify(accounts, null, 2));
                return accounts[index];
            } catch (error) {
                    console.error("Error al eliminar una cuenta:", error);
                return null;
            }
    }

}

export default AccountManager;
*/