import { Container } from 'inversify';
import { MoviesModel, MoviesModelType } from '../../models/movies/moviesModel';
import {
  DashboardViewModel,
  DashboardViewModelType,
} from '../../screens/dashboard/viewModel';
import MoviesService, { MoviesServiceType } from '../../services/movies.service';

var container = new Container();
container
  .bind<DashboardViewModel>(DashboardViewModelType)
  .to(DashboardViewModel)
  .inSingletonScope();

container.bind<MoviesModel>(MoviesModelType).to(MoviesModel);

container.bind<MoviesService>(MoviesServiceType).to(MoviesService);

export default container;
