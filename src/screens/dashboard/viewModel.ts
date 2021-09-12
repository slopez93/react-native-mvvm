import { injectable, inject } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import { MoviesModel, MoviesModelType } from '../../models/movies/moviesModel';

@injectable()
export class DashboardViewModel {
  @observable isLoading = true;

  constructor(@inject(MoviesModelType) private model: MoviesModel) {
    makeObservable(this);
  }

  async init(): Promise<void> {
    await this.model.fetchMovies();
    this.setIsLoading(false);
  }

  get movies() {
    return this.model.movies;
  }

  @action
  setIsLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }
}

export const DashboardViewModelType = Symbol('DashboardViewModel');
