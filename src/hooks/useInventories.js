import React, { useEffect, useState } from 'react';

const useInventories = (url = 'http://localhost:3000/data.json') => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [url])

    return [inventories, setInventories];
};

export default useInventories;