import React, { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInventories(data)
            })
    }, [])
    return [inventories];
};

export default useInventories;