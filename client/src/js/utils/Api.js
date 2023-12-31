export default class API {
  constructor(baseUrl) {
    this.ROOT_URL = baseUrl;
  }

  async getRequest(routing) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(this.ROOT_URL + routing, requestOptions);
    return await response.json();
  }

  async postRequest(routing, data) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(this.ROOT_URL + routing, requestOptions);
    return await response.json();
  }

  async putRequest(routing, data) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(this.ROOT_URL + routing, requestOptions);
    return await response.json();
  }

  async patchRequest(routing, data) {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(this.ROOT_URL + routing, requestOptions);
    return await response.json();
  }

  async deleteRequest(routing) {
    const requestOptions = {
      method: "DELETE",
    };

    const response = await fetch(this.ROOT_URL + routing, requestOptions);
    return await response.json();
  }
}
