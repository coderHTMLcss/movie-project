import path from 'path'
import MovieModel from '../models/movie.model.js'
import e from 'express'

const __dirname = path.resolve()

const getHomepage = (req, res) => {
	res.sendFile(path.join(__dirname + '../../client/index.html'))
}

const getMovie = async (request, response) => {
	const allList = await MovieModel.find()

	if (allList) {
		response.send(allList)
	} else {
		response.status(404)
		response.send({ message: 'movies is not created' })
	}
}

const addMovie = async (request, response) => {
	const newTwit = await MovieModel.create({ ...request.body })

	return response.send({ newTwit, message: 'movies added' })
}

const deleteMovie = (request, response) => {
	const id = request.params.id

	const deletedTwit = MovieModel.findByIdAndDelete(id)

	response.send({ message: 'movies deleted', deletedTwit })
}

const getMovieTrending =  async(request, response) => {
	const listTrending = await MovieModel.find({trending: true})
	if(listTrending) {
		response.send(listTrending)
	} else {
		response.status(404)
		response.send({ message: 'movies is not created' })
	}
}
const getMovieContinue = (request, response) => {
	const listContinue = MovieModel.find({continue: true})
	if(listContinue) {
		response.send(listContinue)
	} else {
		response.status(404)
		response.send({ message: 'movies is not created' })
	}
}

const MovieController = {
	getHomepage,
	getMovie,
	addMovie,
	deleteMovie,
	getMovieTrending,
	getMovieContinue,
}

export default MovieController
