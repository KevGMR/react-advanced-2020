import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')
  
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        }
        else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(response.statusText)
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login)
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  if (isLoading) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }

  if (isError) {
    return <div>
      <h1>Error...</h1>
    </div>
  }

  return <h1>{ user }</h1>;
};

export default MultipleReturns;
