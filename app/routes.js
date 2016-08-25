import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
// import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import MobileDevicesSelector from './containers/MobileDevicesSelector';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={MobileDevicesSelector} />
		<Route path="/about" component={About} />
	</Route>
);
