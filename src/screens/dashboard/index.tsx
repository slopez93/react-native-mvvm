import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import container from '../../config/di';
import { DashboardViewModel,DashboardViewModelType } from './viewModel';

function Dashboard(): JSX.Element {
  const viewModel = container.get<DashboardViewModel>(DashboardViewModelType);

  useEffect(() => {
    viewModel.init();
  }, []);

  return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    {viewModel.isLoading ? (
      <ActivityIndicator size="large" />
    ) : (
      <>
      <Text>Movies loaded !</Text>
      {viewModel.movies.map(({id, title, releaseYear}) => (
        <Text key={id}>{`${title} - ${releaseYear}`}</Text>
      ))}
      </>
    )}
  </View>;
}

export default observer(Dashboard);
