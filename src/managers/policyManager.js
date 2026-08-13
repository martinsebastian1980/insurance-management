import Policy from "../models/policy.model.js";

class PolicyManager {

    async getPolicies() {
        try {
            const policies = await Policy
                .find()
                .sort({ id: 1 })
                .lean();

            return policies;

        } catch (error) {
            console.error("Error al obtener las pólizas:", error);
            return [];
        }
    }

    async addPolicy(policy) {
        try {
            const lastPolicy = await Policy
                .findOne()
                .sort({ id: -1 })
                .lean();

            const newId = lastPolicy ? lastPolicy.id + 1 : 1;

            const newPolicy = await Policy.create({
                id: newId,
                accountId: policy.accountId,
                insuranceType: policy.insuranceType,
                company: policy.company,
                policyNumber: policy.policyNumber,
                premium: policy.premium,
                startDate: policy.startDate,
                endDate: policy.endDate,
                status: "ACTIVE",
                createdAt: new Date()
            });

            return newPolicy;

        } catch (error) {
            console.error("Error al crear una póliza:", error);
            return null;
        }
    }

    async getPolicyById(id) {
        try {
            const policy = await Policy
                .findOne({ id: Number(id) })
                .lean();

            return policy || null;

        } catch (error) {
            console.error("Error al buscar una póliza:", error);
            return null;
        }
    }

    async updatePolicy(id, policy) {
        try {
            const updatedPolicy = await Policy.findOneAndUpdate(
                { id: Number(id) },
                { $set: policy },
                {
                    returnDocument: "after",
                    runValidators: true
                }
            ).lean();

            return updatedPolicy || null;

        } catch (error) {
            console.error("Error al actualizar una póliza:", error);
            return null;
        }
    }

    async deletePolicy(id) {
        try {
            const updatedPolicy = await Policy.findOneAndUpdate(
                { id: Number(id) },
                { $set: { status: "INACTIVE" } },
                {
                    returnDocument: "after",
                    runValidators: true
                }
            ).lean();

            return updatedPolicy || null;

        } catch (error) {
            console.error("Error al eliminar una póliza:", error);
            return null;
        }
    }
}

export default PolicyManager;



/*import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

class PolicyManager {

    constructor() {

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        this.path = path.join(__dirname, "../../data/policies.json");

    }

    async getPolicies(){
            try{
                const data = await fs.readFile(this.path, "utf-8");
                const policies = JSON.parse(data);
                return policies;
            }catch(error){
                console.error("Error al obtener las pólizas:", error);
                return [];
            }
    }

    async addPolicy(policy) {
                try {
                    const policies = await this.getPolicies();
                    const lastPolicy = policies[policies.length - 1];
                    const newId = policies.length === 0 ? 1 : lastPolicy.id + 1;
    
                    const newPolicy = {
                                        id: newId,
                                        accountId: policy.accountId,
                                        insuranceType: policy.insuranceType,
                                        company: policy.company,
                                        policyNumber: policy.policyNumber,
                                        premium: policy.premium,
                                        startDate: policy.startDate,
                                        endDate: policy.endDate,
                                        status: "ACTIVE",
                                        createdAt: new Date()
                                        };
    
                        policies.push(newPolicy);
                    await fs.writeFile(this.path,JSON.stringify(policies, null, 2));
                        return newPolicy;
                } catch (error) {
                        console.error("Error al crear una poliza:", error);
                    return null;
                }
    }


    async getPolicyById(id){
            try {
                const policies = await this.getPolicies();
                const policy = policies.find(policy => policy.id === Number(id));
                return policy || null;
            } catch (error) {
                console.error("Error al buscar una poliza:", error);
            return null;
            }
    }

    async updatePolicy(id, policy){
        try {
        
                // obtener polizas
                        const policies = await this.getPolicies();
                // buscar índice
                        const index = policies.findIndex(policy => policy.id === Number(id));
                // verificar si existe
                        if (index === -1) {
                            return null;
                        }
                // actualizar
                        policies[index] = {...policies[index],...policy};
                // guardar
                        await fs.writeFile(this.path,JSON.stringify(policies, null, 2));
                // devolver
                        return policies[index];
        
                    } catch (error) {
                        console.error("Error al actualizar una poliza:", error);
                    return null;
                    }
    }

    async deletePolicy(id){
        try {
                        const policies = await this.getPolicies();
                        const index = policies.findIndex(policy => policy.id === Number(id));
                            if (index === -1) { 
                                return null;
                            } 
                            if (policies[index].status === "INACTIVE") { 
                            //Qué conseguimos? si ACTIVE; apretas ACTIVE → INACTIVE ; si esta INACTIVE el backend no vuelve a procesarla.
                                return null;
                            }
                        policies[index].status = "INACTIVE";
                        await fs.writeFile(this.path,JSON.stringify(policies, null, 2));
                        return policies[index];
                    } catch (error) {
                            console.error("Error al eliminar una poliza:", error);
                        return null;
                    }
    }

}

export default PolicyManager;
*/