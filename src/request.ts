import fetch from "node-fetch";

export class Request {
  private async fetch(method: string, path: string, key: string, body?: {}) {
    console.log(path);
    const response = await fetch(path, {
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Accept-Datetime-Format": "RFC3339",
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "User-Agent": "request"
      },
      method
    });
    const json = await response.json();
    return json;
  }

  private async fetchStream(method: string, path: string, key: string) {
    fetch(path, {
      headers: {
        "Accept-Datetime-Format": "RFC3339",
        Authorization: `Bearer ${key}`,
        Connection: "keep-alive",
        "Content-Type": "application/json",
        "User-Agent": "request"
      },
      method
    }).then(res => {
      return new Promise((resolve, reject) => {
        res.body.on("data", chunk => {
          const json = JSON.parse(chunk.toString());
          console.log(json);
        });

        res.body.on("error", err => {
          console.log(err);
          reject(err);
        });

        res.body.on("finish", () => {
          resolve();
        });
      });
    });
  }

  get(path: string, key: string) {
    return this.fetch("GET", path, key);
  }
  patch(path: string, key: string, body?: {}) {
    return this.fetch("PATCH", path, key, body);
  }
  post(path: string, key: string, body?: {}) {
    return this.fetch("POST", path, key, body);
  }
  stream(path: string, key: string) {
    return this.fetchStream("GET", path, key);
  }

  //     });
  //     // .then(res => res.buffer())
  //     // .then(buffer => console.log(buffer));
  //     // .then(response => response.body)
  //     // .then(body => {
  //     //   const reader = body.getReader();
  //     // .then(response => {
  //     //   console.log(response);
  //     //   console.log(response.body);
  //     // });

  //     // const payload: INotificationPayload = { id: ++this.autoIncrement, message };
  //     return pubSub.publish("NOTIFICATIONS", 2);
  //   }
}