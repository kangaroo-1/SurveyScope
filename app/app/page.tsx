"use client"
import Map from 'react-map-gl/mapbox';
import { useControl, Marker, MarkerProps, ControlPosition } from 'react-map-gl/mapbox';
import { useRef, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import GeocoderControl from '@/components/Geocoder/geocoder-control2';
import SearchBox from '@/components/Geocoder/searchBox';

export default function Home() {
	
	const TOKEN = process.env.MapboxAccessToken;
	return (
		<>
			{/* <div className='w-full h-full' style={{ position: 'relative' }}>
				<Map
					mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
					initialViewState={{
						longitude: 151.2082944,
						latitude: -33.8698444,
						zoom: 22
					}}
					style={{ width: '60%', height: '60vh' }}
					mapStyle="mapbox://styles/mapbox/streets-v9"
				>
					<GeocoderControl 
						position='top-right'
						mapboxAccessToken={'pk.eyJ1IjoiaGF6ZWxpc2dvb2QiLCJhIjoiY204YXk0YTJyMGJmMDJqcHZhNHZuamltMyJ9.PFgJ4hEHDTUtsGBNA6VyAw'} />
				</Map>
			</div> */}
		</>
	);
}
