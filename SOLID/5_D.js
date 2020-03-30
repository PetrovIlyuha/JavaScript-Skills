// Dependency inversion principle

class Fetch {
  request(url) {
    // return fetch(url).then(res => res.json());
    return Promise.resolve("fetched data");
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = "Data From Local Storage";
    return dataFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request("producthunt.com");
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet(key) {
    return this.localStorage.get(key);
  }
}
class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData());
