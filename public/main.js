var apiUrl = 'http://www.omdbapi.com/?'

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
		console.log(data)
	})
	.catch(function(err) {
		console.error(err)
	})
}
