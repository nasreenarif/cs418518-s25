import { Router } from "express";
const dashboard = Router();

dashboard.get("/", (req, res) => {
    // const { dashboard } = req.session;
    console.log("Cookies:", req.cookies); // This will show if the cookie is sent
    // console.log("Session:", req.session); // This will show the session data
    console.log("Session",req.session.user);
    if (!req.session.user) {
        return res.status(401).json({ message: 'Unautorized' })
    }
    console.log("Session user in dashboard:", req.session.user);
    res.json(req.session.user);
})
export default dashboard;
