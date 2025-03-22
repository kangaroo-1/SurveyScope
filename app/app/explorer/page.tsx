"use client"
import React from 'react'
import Map from 'react-map-gl/mapbox';
import GeocoderControl from '@/components/Geocoder/geocoder-control2';
function page() {
    const TOKEN = process.env.MapboxAccessToken;
    return (
        <div>
            <div className='w-full h-full flex space-x-5' style={{ position: 'relative' }}>
                <div className='w-3/5 h-full'>
                    {/* <Map
                        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                        initialViewState={{
                            longitude: 151.2082944,
                            latitude: -33.8698444,
                            zoom: 22
                        }}
                        style={{ width: '100%', height: '60vh' }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                    >
                        <GeocoderControl 
                            position='top-right'
                            mapboxAccessToken={'pk.eyJ1IjoiaGF6ZWxpc2dvb2QiLCJhIjoiY204YXk0YTJyMGJmMDJqcHZhNHZuamltMyJ9.PFgJ4hEHDTUtsGBNA6VyAw'} />
                    </Map> */}
                </div>
                
                {/* display results */}
                <div className='w-2/5 h-full bg-gray-200'>
                    {/* display nearest  */}
                    <div>
                        <div className='font-bold'>Nearby Places</div>
                        <div>Supermarket</div>


                        <div>Transportation</div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default page
