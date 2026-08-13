import express from "express";
import AccountManager from "../managers/accountManager.js";
import PolicyManager from "../managers/policyManager.js";

const accountsRouter = express.Router();
const accountManager = new AccountManager();
const policyManager = new PolicyManager();

accountsRouter.get("/", async (req, res) => {
    const accounts = await accountManager.getAccounts();
    res.render("accounts/accounts", { accounts });
});

accountsRouter.get("/new", (req, res) => {
    res.render("accounts/accountNew");
}); 

accountsRouter.post("/", async (req, res) => {

    const newAccount = await accountManager.addAccount(req.body);
    console.log(newAccount);
    res.redirect("/accounts/new");
});

accountsRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const account = await accountManager.getAccountById(id);
        if (!account) {
            return res.status(404).send({error: "Cliente no encontrado"});
        }
    const policies = await policyManager.getPolicies();
    const accountPolicies = policies.filter(
        //policy => policy.accountId === String(id)
        //El problema es que accountId puede estar guardado como número (1) 
        // mientras que String(id) siempre es texto ("1").
        policy => Number(policy.accountId) === Number(id)
    );
    res.render("accounts/accountDetail", {account,policies: accountPolicies});
});

accountsRouter.get("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const account = await accountManager.getAccountById(id);
    if (!account) {
        return res.status(404).send({error: "Cliente no encontrado"});
    }
    res.render("accounts/accountEdit", { account });
});

accountsRouter.post("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const updatedAccount = await accountManager.updateAccount(id, req.body);
    if (!updatedAccount) {
        return res.status(404).send({error: "Cliente no encontrado"});
    }
    res.redirect("/accounts");
});


export default accountsRouter;

