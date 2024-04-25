class ApiHandler {
  #urlBase: string;
  #apiKey: string;
  #dataSource: string;
  #database: string;
  #accessToken: string;

  constructor() {
    this.#urlBase = "https://sa-east-1.aws.data.mongodb-api.com/app/data-vukrr/endpoint/data/v1";
    this.#apiKey = "1tQJvaqfFOLz5uoeMeNrEiu7jJVkeLrXM28Hv1Nov1e6OBxPUIgJCouSLo6gr1D4"
    this.#dataSource = "app"
    this.#database = "pretty-sms"
    this.#accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjYxNzIxMjBkNzg1Yzg4YjIzN2UwM2M2IiwiZXhwIjoxNzEzNDE0MzE2LCJpYXQiOjE3MTM0MTI1MTYsImlzcyI6IjY2MjA5OWE0M2ViNzRjZjlkNTRmYjNiNiIsImp0aSI6IjY2MjA5OWE0M2ViNzRjZjlkNTRmYjNiOCIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjY2MTcyMTIwZDc4NWM4OGIyMzdlMDNjNiIsInN1YiI6IjY2MjA5OTUxM2ViNzRjZjlkNTRmYWRjNSIsInR5cCI6ImFjY2VzcyJ9.FQ4fUHz1rYD4ZfSExhIpQI3ZtzjqiYzZNKdwanMFC7k"
  }

  post<T = void>(url: string, data: Record<string, unknown>): Promise<T> {
    const payload = { ...data, dataSource: this.#dataSource, database: this.#database }

    return fetch(`${this.#urlBase}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "api-key": this.#apiKey,
        "Authorization": `Bearer ${this.#accessToken}`
      },
      body: JSON.stringify(payload)
    }).then(res => res.json())
  }
}

export default new ApiHandler();