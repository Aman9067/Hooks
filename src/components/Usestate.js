
import React, { useEffect, useState } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? <p>{data.title}</p> : <p>Loading...</p>}

            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">user Id</th>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <th> {data ? <p>{data.userId}</p> : <p>Loading...</p>} </th>
    <th> {data ? <p>{data.id}</p> : <p>Loading...</p>} </th>
    <th> {data ? <p>{data.body}</p> : <p>Loading...</p>} </th>
    <th> {data ? <p>{data.title}</p> : <p>Loading...</p>} </th>

  </tbody>
</table>



        </div>
    );
}

export default DataFetcher;


