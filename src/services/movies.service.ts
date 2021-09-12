import { injectable } from 'inversify';

@injectable()
class MoviesService {
  async fetchMovies(): Promise<any> {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    return json.movies;
  }
}

export const MoviesServiceType = Symbol('MoviesService');

export default MoviesService;
