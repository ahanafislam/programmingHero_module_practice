import Country from '../Country/Country';
import { useEffect, useState } from 'react';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    },[]);

    return (
        <div>
            <h1>Total countries in the world is {countries.length}</h1>
            <div className='countryList'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                        ></Country>)
                }
            </div>
        </div>
    );
}

export default Countries;
