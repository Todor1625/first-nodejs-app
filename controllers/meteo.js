const model = require('../models/meteo');

async function dohvatiStatistike(req, res, next) {

	try {
    const statistike = await model.dohvatiStatistike();

	res.render('statistike.ejs', {statistike}); 
	} catch (err) {
		next(err);
	}
}

async function dohvatiDetalje(req, res, next) {
    try {
		const data = req.body;
		const grad = data.grad;
		const uredjenje = data.uredjenje;

		const podaci = await model.dohvatiPodatke(grad, uredjenje);

		res.render('detalji.ejs', {grad, podaci});

	} catch (err) {
		next(err);
	}
}

module.exports = {
    dohvatiStatistike,
    dohvatiDetalje,
};
