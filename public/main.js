var apiUrl = 'https://www.omdbapi.com/?'

$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault()

		var searchTerm = $('input').val()

		searchOMDB(searchTerm)
	})
})

function searchOMDB(term) {
	$.get(apiUrl + 's=' + term)
	.then(function(data) {
		var movies = data.Search

		movies.forEach(function(movie) {
			var $li = generateLi(movie)

			$('#movie-list > ul').append($li)
		})
	})
	.catch(function(err) {
		console.error(err)
	})
}

function generateLi(movie) {
	var $el = $('<li>')
	$el.text(movie.Title)
	return $el
}
