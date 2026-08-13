import express from "express";
import PolicyManager from "../managers/policyManager.js";
import AccountManager from "../managers/accountManager.js";
const accountManager = new AccountManager();

const policiesRouter = express.Router();
const policyManager = new PolicyManager();

policiesRouter.get("/", async (req, res) => {
        const policies = await policyManager.getPolicies();
        const policiesWithStatus = policies.map(policy => ({
            ...policy,isActive: policy.status === "ACTIVE"
        }));
        res.render("policies/policies", { policies: policiesWithStatus });
});

policiesRouter.get("/new", async (req, res) => {
        // acá obtenemos los clientes
    const accounts = await accountManager.getAccounts();
        // después renderizamos la vista res.render("policies/policyNew", {accounts});
        const accountId = req.query.accountId;
        const selectedAccount = accounts.find(
            account => String(account.id) === String(accountId)
        );
        res.render("policies/policyNew", {accounts,selectedAccount});
});



policiesRouter.post("/", async (req, res) => {

    const newPolicy = await policyManager.addPolicy(req.body);
    console.log(newPolicy);
    res.redirect("/policies");
});

policiesRouter.get("/:id", async (req, res) => {

    const id = req.params.id;
    const policy = await policyManager.getPolicyById(id);
    console.log(policy);
    res.send(policy);

});

policiesRouter.put("/:id", async (req, res) => {

    const id = req.params.id;
    const updatedPolicy = await policyManager.updatePolicy(id, req.body);

    if (!updatedPolicy) {
        return res.status(404).send({
            error: "Póliza no encontrada"
        });
    }

    res.send(updatedPolicy);
});

policiesRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedPolicy = await policyManager.deletePolicy(id);

    if (!deletedPolicy) {
        return res.status(404).send({
            error: "Póliza no encontrada"
        });
    }
    res.send(deletedPolicy);
});

policiesRouter.get("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const policy = await policyManager.getPolicyById(id);
    if (!policy) {
        return res.status(404).send({error: "Póliza no encontrada"});
    }
    const isActive = policy.status === "ACTIVE";
    const isInactive = policy.status === "INACTIVE";
    res.render("policies/policyEdit", { policy,isActive,isInactive});
});

policiesRouter.post("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const updatedPolicy = await policyManager.updatePolicy(id, req.body);
        if (!updatedPolicy) {
            return res.status(404).send({error: "Póliza no encontrada"});
        }
    res.redirect("/policies");
});

policiesRouter.post("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const deletedPolicy = await policyManager.deletePolicy(id);
    if (!deletedPolicy) {
        return res.status(404).send({
            error: "Póliza no encontrada"
        });
    }
    res.redirect("/policies");
});
export default policiesRouter;



/* policiesRouter.get("/update/:id", async (req, res) => {
    const id = req.params.id;
    const updatedPolicy = await policyManager.updatePolicy(id, {
        company: "Federación Patronal",
        premium: "50000"
    });
    console.log(updatedPolicy);
    res.send(updatedPolic   `y);
});

policiesRouter.get("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const deletedPolicy = await policyManager.deletePolicy(id);
    console.log(deletedPolicy);
    res.send(deletedPolicy);
}); */

