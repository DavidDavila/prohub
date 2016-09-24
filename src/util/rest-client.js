
export default class RestClient {

  getHeaders() {
    return new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${cookies.load('accessToken')}`,
    });
  }

  concatToUrl(url) {
    return __HOST__ + '/api/' + url;
  }

  get(url) {
    return fetch(this.concatToUrl(url), {
      method: 'get',
      headers: this.getHeaders(),
    });
  }

  post(url, body) {
    return fetch(this.concatToUrl(url), {
      method: 'post',
      headers: this.getHeaders(),
      body: JSON.stringify(body)
    });
  }

  postFile(url, file) {
    const data = new FormData();
    data.append('file', file);
    return fetch(this.concatToUrl(url), {
      method: 'POST',
      body: data,
    });
  }

  put(url, body) {
    return fetch(this.concatToUrl(url), {
      method: 'put',
      headers: this.getHeaders(),
      body: JSON.stringify(body)
    });
  }

  delete(url, body) {
    return fetch(this.concatToUrl(url), {
      method: 'delete',
      headers: this.getHeaders()
    });
  }

}
