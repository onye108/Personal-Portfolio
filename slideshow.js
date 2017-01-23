var allProjects = [];

function PortfolioItem (opts) {

  this.projectName = opts.projectName;
  this.imageUrl = opts.imageUrl;
  this.projectPage = opts.projectPage;
  this.dateCreated = opts.dateCreated;
}

projectsArray.forEach(function(ele){
  allProjects.push(new PortfolioItem(ele));
});

PortfolioItem.forEach(function(a){
  $('.menu').append(a.toHtml)
});
