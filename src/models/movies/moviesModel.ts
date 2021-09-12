import { inject, injectable } from 'inversify';
import MoviesService, { MoviesServiceType } from '../../services/movies.service';
import { Movie } from './dto';

@injectable()
export class MoviesModel {
  movies: Array<Movie> = [];

  constructor(@inject(MoviesServiceType) private service: MoviesService) {}

  async fetchMovies(): Promise<void> {
    const movies = await this.service.fetchMovies();
    this.setMovies(movies);
  }

  setMovies(movies: Array<Movie>) {
    this.movies = movies;
  }
}

export const MoviesModelType = Symbol('MoviesModel');
