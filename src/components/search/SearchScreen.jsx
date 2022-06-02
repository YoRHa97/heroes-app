import queryString from 'query-string';
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from 'react';
import { useForm } from "../../custom-hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    const [{searchText}, handleInputChange] = useForm({searchText: q});
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };
    
    return (
        <>
            <h1>Searcher</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        >
                        </input>
                        <button type="submit" className="btn btn-primary mt-3">Search...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />       
                    {(q.trim() === '') ? (<div className='alert alert-info'>Buscar un heroe</div>)
                    : (heroesFiltered.length === 0) ? (<div className='alert alert-danger'>No results: {q}</div>)
                    : (heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero} />))}    
                </div>
            </div>
        </>
    );
};
