import axios from 'axios';

export default axios.create({
    baseURL: 'https://app-quiz-44b56.firebaseio.com/'
})