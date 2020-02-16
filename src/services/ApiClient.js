import config from '../config';
import axios from 'axios';

const ApiClient = () => {
  let _instance = null;
  return {
    instance() {
      if (!_instance) {
        const axInstanceConfig = config.get();
        // console.log(`axios.create`, axInstanceConfig)
        _instance = axios.create(axInstanceConfig);
      }
      return _instance;
    },
    getPerson(id, axRequestConfig) {
      const query = `people/${id}`;
      return this.instance().get(query, axRequestConfig);
    }
  };
};

export default ApiClient();
