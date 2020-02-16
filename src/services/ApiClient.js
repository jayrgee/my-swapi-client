import config from '../config';
import axios from 'axios';

const ApiClient = () => {
  let _instance = null;
  return {
    instance() {
      if (!_instance) {
        const axConfig = config.get();
        console.log(`axios.create`, axConfig)
        _instance = axios.create(axConfig);
      }
      return _instance;
    },
    getPerson(id, axConfig) {
      const query = `people/${id}`;
      return this.instance().get(query, axConfig);
    }
  };
};

export default ApiClient();
