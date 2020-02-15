import axios from 'axios';

const Config = () => {
  let _data = null;
  return {
    get: function() {
      return _data;
    },
    load: async function() {
      const result = await axios.get('/config.json');
      _data = result.data;
      return _data;
    }
  };
};

export default Config();
export { Config };
