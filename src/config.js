import axios from 'axios';

const _Config = () => {
  let _data = null;
  return {
    get() {
      return _data;
    },
    async load() {
      const result = await axios.get('/config.json');
      _data = result.data;
      return _data;
    }
  };
};

export default _Config();
export { _Config };
