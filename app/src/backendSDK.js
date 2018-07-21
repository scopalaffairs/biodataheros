import fetch from 'node-fetch';

class BackendSDK {
  constructor() {
    this.defaultHeaders = {
      'Content-type': 'application/json',
    };
  }
  getChain() {
    const path = '127.0.0.1:8000/chain';
    let ok;
    let status;
    const headers = {
      ...this.defaultHeaders,
    };
    return fetch(path, {
      method: 'GET',
      headers,
    })
      .then(res => {
        ok = res.ok;
        status = res.status;
        return res.json();
      })
      .then(json => {
        if (!ok) {
          let error;
          switch (status) {
            case 500: {
              error = new Error('Internal Server Error');
              error.display = true;
              throw error;
            }
            default:
              error = new Error('Please try Aagain');
              error.display = true;
              throw error;
          }
        }
        return json;
      });
  }
  postTransaction(author, content) {
    const path = '127.0.0.1:8000/new_transaction';
    let ok;
    let status;
    const headers = {
      ...this.defaultHeaders,
    };
    const stringyfiedBody = JSON.stringify({ author, content });
    return fetch(path, {
      method: 'POST',
      headers,
      body: stringyfiedBody,
    })
      .then(res => {
        ok = res.ok;
        status = res.status;
        return res.json();
      })
      .then(json => {
        if (!ok) {
          let error;
          switch (status) {
            case 404: {
              error = new Error('Invlaid transaction data');
              error.display = true;
              throw error;
            }
            default:
              error = new Error('Please try again');
              error.display = true;
              throw error;
          }
        }
        return json;
      });
  }
  getPendingTransaction() {
    const path = '127.0.0.1:8000/pending_tx';
    let ok;
    let status;
    const headers = {
      ...this.defaultHeaders,
    };
    return fetch(path, {
      method: 'GET',
      headers,
    })
      .then(res => {
        ok = res.ok;
        status = res.status;
        return res.json();
      })
      .then(json => {
        if (!ok) {
          let error;
          switch (status) {
            case 500: {
              error = new Error('Internal Server Error');
              error.display = true;
              throw error;
            }
            default:
              error = new Error('Please try Aagain');
              error.display = true;
              throw error;
          }
        }
        return json;
      });
  }
  startMining() {
    const path = '127.0.0.1:8000/mine';
    let ok;
    let status;
    const headers = {
      ...this.defaultHeaders,
    };
    return fetch(path, {
      method: 'GET',
      headers,
    })
      .then(res => {
        ok = res.ok;
        status = res.status;
        return res.json();
      })
      .then(json => {
        if (!ok) {
          let error;
          switch (status) {
            case 500: {
              error = new Error('Internal Server Error');
              error.display = true;
              throw error;
            }
            default:
              error = new Error('Please try Aagain');
              error.display = true;
              throw error;
          }
        }
        return json;
      });
  }
  postPeerNodes(nodes) {
    const path = '127.0.0.1:8000/new_transaction';
    let ok;
    let status;
    const headers = {
      ...this.defaultHeaders,
    };
    return fetch(path, {
      method: 'POST',
      headers,
      body: JSON.stringify(nodes),
    })
      .then(res => {
        ok = res.ok;
        status = res.status;
        return res.json();
      })
      .then(json => {
        if (!ok) {
          let error;
          switch (status) {
            case 400: {
              error = new Error('Invlaid data');
              error.display = true;
              throw error;
            }
            default:
              error = new Error('Please try again');
              error.display = true;
              throw error;
          }
        }
        return json;
      });
  }
}

export default BackendSDK;
