import authJwt from '../middleware/authJwt'
import { addPlace, addRegion } from '../controllers/PlaceController'
import { updateSettings } from '../controllers/SettingsController'
import { approveAlbum, getPendingAlbums } from '../controllers/AlbumController'

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, x-user-id,Origin, Content-Type, Accept'
    )
    next()
  })

  app.get(
    '/api/admin/approvals/:start/:count',
    [authJwt.verifyToken, authJwt.isAdmin],
    getPendingAlbums
  )
  app.get(
    '/api/admin/approve/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    approveAlbum
  )
  app.post(
    '/api/admin/places',
    [authJwt.verifyToken, authJwt.isAdmin],
    addPlace
  )
  /**
   * This adds a Region. This should check for admin Role.
   */
  app.post(
    '/api/admin/regions',
    [authJwt.verifyToken, authJwt.isAdmin],
    addRegion
  )

  app.post('/api/admin/settings', [authJwt.isAdmin], updateSettings)
}
