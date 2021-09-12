import React from 'react';
import { useForm } from '../hooks/useForm';
import { listaSearch } from '../actions/citaAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import  MostrarCita  from './MostrarCita';
import { Cita } from './Cita';

export const SearchApp = () => {

    const dispatch = useDispatch();

    const { search } = useSelector(store => store.cita);
    console.log(search);

    const [formValues, handleInputChange] = useForm({
        searchText: ''
    });
    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(listaSearch(searchText));

    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your Dog"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}

                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />
                    {
                        (search) ?
                            (

                                search.map(cita => (
                                    <Cita
                                        key={cita.id}
                                        {...cita}
                                    />
                                ))

                            ) :
                            <p>No hay datos</p>
                    }


                </div>

            </div>


        </div>
    )
}