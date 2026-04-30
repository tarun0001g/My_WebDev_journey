
exports.pageNotFound = (req, res, next) => {
  res.render('404', {pageTitle: 'Page not found!', pageName: "404"}); 
}