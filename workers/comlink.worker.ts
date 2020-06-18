import * as Comlink from "comlink";

export interface WorkerApi {
  getName: typeof getName;
}

const workerApi: WorkerApi = {
  getName,
};

async function getName() {
  const res = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const json = await res.json();
  return json[0];
}

Comlink.expose(workerApi);
