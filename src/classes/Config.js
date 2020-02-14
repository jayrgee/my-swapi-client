import axios from "axios";

class Config {
  constructor() {
    this._settings = null;
  }

  get settings() {
    return this._settings;
  }

  async load() {
    const result = await axios.get("/config.json");
    this._settings = result.data;
    return this._settings;
  }
}

export default new Config();
