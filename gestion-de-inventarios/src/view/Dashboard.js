import React from 'react'
import PostList from '../components/PostList'

const Dashboard = () => {

  const [state, setState] = React.useState([])

  React.useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/posts`)
      let jsonData = await response.json();
      setState(jsonData);
    };
    fetchLocations();
  }, []);

  return (
    <>
      <h1>Dashboard component</h1>
      <PostList data={state} />
    </>
  )
}

export default Dashboard
