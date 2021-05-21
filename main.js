document.getElementById('reviewInputForm').addEventListener('submit', saveReview);

function saveReview(e) {
  var reviewDesc = document.getElementById('DescInput').value;
  var reviewrating = document.getElementById('ratinginput').value;
  var reviewname = document.getElementById('name').value;
  var reviewemail = document.getElementById('emailinput').value;
  var reviewId = chance.guid();
  

  var review = {
    id: reviewId,
    description: reviewDesc,
    rating: reviewrating,
    name: reviewname,
    email: reviewemail
 
  }


    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(review);
    localStorage.setItem('issues', JSON.stringify(issues));
  

  document.getElementById('reviewInputForm').reset();

  fetchReviews();

  e.preventDefault();
}


function deleteReview(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  fetchReviews();
}

function fetchReviews() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesListe = document.getElementById('reviewsList');

  issuesListe.innerHTML = '';

  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var rating_review = issues[i].rating;
    var name_review = issues[i].name;
    var email_review = issues[i].email;
    

    issuesListe.innerHTML +=   '<div class="well">'+
                              '<h6> User id: ' + id + '</h6>'+
                              '<h3>' + desc + '</h3>'+
                              '<p> ' + email_review + '</p>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + rating_review + '</p>'+
                              '<p><span class="glyphicon glyphicon-user"></span> ' + name_review + '</p>'+
                              '<a href="#" onclick="deleteReview(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                              '</div>';
  }
}
