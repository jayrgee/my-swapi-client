// this could be an api client
import config from "./Config";
import axios from "axios";

class ApiClient {
  constructor() {
    this._instance = null;
  }

  get instance() {
    if (!this._instance) {
      this._instance = axios.create(config.settings);
      return this._instance;
    }
  }

  get(url) {
    const result = this._instance.get(url);
    return result;
  }
}

export default new ApiClient();
