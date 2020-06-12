import React from 'react';

const query = `
  GRAPHQL_QUERY_TOBE_DEFINED
`

class App extends React.Component {
  state = {
    // DEFINE STATE,
  }

  async componentDidMount() {
    const raw = await this.getData('GRAPHQL_SERVER_URL', {query})
    const { data: { status }} = await raw.json()
    // UPDATE STATUS
  }

  getData = (url, query) => fetch(url, {
    method: '__',
    headers: {
      'Content-Type': '__',
    },
    body: JSON.stringify(query),
  })

  render() {
    return (
      <div>
        <p>REPLACE TO PRINT DATA</p>
      </div>
    )
  }
}

export default App;
