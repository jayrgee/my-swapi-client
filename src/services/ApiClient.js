// this could be an api client
import config from "../config";
import axios from "axios";

const ApiClient = () => {
  let _instance = null;
  return {
    instance: function() {
      if (!_instance) {
        _instance = axios.create(config.get());
      }
      return _instance;
  
    },
    person: function(id, axConfig) {
      const query = `people/${id}`;
      return this.instance().get(query, axConfig);
    }
  };
};

export default ApiClient();
