import apiClient from "./ApiClient";

class SomeThing {
  constructor() {
    this._instance = null;
  }

  get instance() {
    if (!this._instance) {
      this._instance = apiClient.instance;
    }
    return this._instance;
  }

  person(id) {
    console.log(`something getting ${id}`);
    return this.instance.get(`people/${id}`);
  }
}

export default new SomeThing();
