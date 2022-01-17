import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-18967-default-rtdb.europe-west1.firebasedatabase.app/'
})