//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
module.exports = function (router) {
  const version = 'v1'

  //---------------------- Async data routes ------------------------------//



  //-------------------- File download routes ----------------------------//



  //---------------------- V1 page routing ------------------------------//

  router.all('/' + version, function (req, res) {
    res.render(version + '/index', { 'version': version })
  })

  router.all('/' + version + '/index', function (req, res) {
    res.render(version + '/index', { 'version': version })
  })

  router.all('/' + version + '/general', function (req, res) {
    res.render(version + '/general/index', { 'version': version })
  })

  router.all('/' + version + '/general/index', function (req, res) {
    res.render(version + '/general/index', { 'version': version })
  })

  router.all('/' + version + '/qlc', function (req, res) {
    res.render(version + '/qlc/index', { 'version': version })
  })

  router.all('/' + version + '/qlc/index', function (req, res) {
    res.render(version + '/qlc/index', { 'version': version })
  })

  router.all('/' + version + '/qlc/project', function (req, res) {
    res.render(version + '/qlc/project/index', { 'version': version })
  })

  router.all('/' + version + '/qlc/project/index', function (req, res) {
    res.render(version + '/qlc/project/index', { 'version': version })
  })

  router.all('/' + version + '/qlc/project/updated-content', function (req, res) {
    res.render(version + '/qlc/project/updated-content', { 'version': version })
  })

  router.all('/' + version + '/slc', function (req, res) {
    res.render(version + '/slc/index', { 'version': version })
  })

  router.all('/' + version + '/slc/index', function (req, res) {
    res.render(version + '/slc/index', { 'version': version })
  })

}
