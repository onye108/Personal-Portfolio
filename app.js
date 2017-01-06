var portfolio = [];

function Project(options){
  this.title = options.title;
  this.imageUrl = options.imageUrl
  this.projectPage = options.projectPage
  this.dateCreated = options.dateCreated;
}

Project.prototype.toHtml = function(){
  var $newProject = $('ul.galleryUl').clone();
  $newProject.find('h1').text(this.title);
  $newProject.find('img').attr('src',this.imageUrl);
  $newProject.find('a').attr('href', this.projectPage)
  $newProject.find('time[pubdate]').attr('date',this.dateCreated)
  $newProject.find('time').text(' completed ' + parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000) + ' days ago');
  $newProject.removeClass('galleryUl')

  return $newProject;
};
projectsArray.sort(function(currentProject, nextProject) {
  return (new Date(nextProject.dateCreated)) - (new Date(currentProject.dateCreated));
});
projectsArray.forEach(function(element) {
  portfolio.push(new Project(element));
});
portfolio.forEach(function(section) {
  $('#gallery').append(section.toHtml());
});
