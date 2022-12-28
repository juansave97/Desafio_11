
const getDataHome = (req, res) => {
    const data = {
        title: "Desafio Nº11 - Mocks y Normalización",
        content: "test"
    }
    return res.render(`index`, data);
}

module.exports = {
    getDataHome,
};

