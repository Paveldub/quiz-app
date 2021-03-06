import React, { Component } from 'react';

// main layout
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

// pages
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Video from './containers/BgVideo/BgVideo';

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/auth" component={Auth} />
					<Route path="/quiz-creator" component={QuizCreator} />
					<Route path="/quiz/:id" component={Quiz} />
					<Route path="/video" component={Video} />
					<Route path="/" component={QuizList} />
				</Switch>
			</Layout>
		);
	}
}

export default App;
