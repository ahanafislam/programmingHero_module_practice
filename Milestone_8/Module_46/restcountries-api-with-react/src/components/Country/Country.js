import './Country.css';

const Country = (props) => {
    const {name, flags, capital, region} = props.country;
    return (
        <div className='card'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt='country flag picture'/>
            <p>Capital : {capital}</p>
            <p>Region : {region}</p>
        </div>
    );
}

export default Country;
