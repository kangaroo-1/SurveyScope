import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"

function SearchBox() {
    
    const handleClick = async() => {
        const url = 'https://api.mapbox.com/search/searchbox/v1/search';
        const longitude = 151.2082944;
        const latitude = -33.8698444;
        const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN; 
        console.log("accessToken: ", accessToken);
        try {
            const response = await axios.get(url, {
                params: {
                  categories: 'food',
                  proximity: `${longitude},${latitude}`,
                  limit: 10,
                  access_token: accessToken,
                },
              });
              console.log(response.data);

        } catch (error) {
            console.error('Error fetching nearest food:', error);
        };
    };

    return (
        <div>
            <Button onClick={handleClick}>Click </Button>
        </div>
    )
}

export default SearchBox
