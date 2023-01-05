
const getDataHome = (req, res) => {
    const data = {
        title: "Desafio Nº12- Login",
        content: "test"
    }
    return res.render(`index`, data);
}

module.exports = {
    getDataHome,
};

