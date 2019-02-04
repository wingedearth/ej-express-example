
const index = function(req, res) {
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['Andy', 'Jenn', 'Casey']
  });
};

const about = function(req, res) {
  res.render('default', {
    title: 'About Us',
    classname: 'about'
  });
};

module.exports = {
	about,
	index
};
