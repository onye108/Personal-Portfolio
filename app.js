var portfolio = [];

function Project(options){
  for (var key in options) {
    this[key] = options[key];
  }

}

Project.prototype.toHtml = function(){
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000);
  this.publishStatus = this.dateCreated ? `published ${this.daysAgo} days ago`:
  '(draft)';
  return templateRender(this);
};
projectsArray.sort(function(a, b) {
  return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
});
projectsArray.forEach(function(element) {
  portfolio.push(new Project(element));
});
portfolio.forEach(function(section) {
  $('#gallery').append(section.toHtml());
});
