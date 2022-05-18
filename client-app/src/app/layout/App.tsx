import React, { Fragment, useEffect} from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();

  /*axios.get('http://localhost:5000/api/activities').then(response =>{
    setActivites(response.data);
  })*/
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content = 'Loading App'/>

  return (
    <Fragment>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
      
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard/>
      </Container>  
    </Fragment>
  );
}

export default observer(App);
