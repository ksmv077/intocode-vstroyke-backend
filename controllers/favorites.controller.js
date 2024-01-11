const Favorites = require('../models/Favorite.model')
const Ads = require('../models/Ad.model')

module.exports.favoritesController = {
    postFavorite: async function(req, res) {
        try {
            const favorite = await Favorites.create({ad: req.body.ad, user: req.userId })
            const ad = await Ads.findById(req.body.ad)
            res.json({...ad.toObject(), favorite: favorite._id})
        } catch (err) {
            res.status(400).json({error: 'Ошибка при добавлении записи'})
        }
    },
    deleteFavorite: async function (req, res) {
        try {
            const favorite = await Favorites.findById(req.params.id)
            await Favorites.findByIdAndDelete(req.params.id)
            const ad = await Ads.findById(favorite.ad)
            res.json({...ad.toObject(), favorite: undefined})
        } catch (err) {
            res.status(400).json({error: 'Ошибка при удалении записи'})
        }
    },
}