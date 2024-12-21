import { useEffect, useState } from 'react'

const usePetition = (url) =>{

    const [data, setData] = useState();

    useEffect(() => {
        fetch(`${url}`)
          .then(res => res.json())
          .then(data => {setData(data.data)
            console.log(data.data)
          })
          .catch(error => console.error(error))
      }, [])

    return data;
}

export default usePetition;