import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";

import style from "./style.module";

import Input from '@/Components/Input/Input';
import Button from '@/Components/Button/Button';

import { getMovies } from "@/redux/actions";
import useUpdateEffect from '@/hooks/useUpdateEffect';

const Search = (props) =>  {
  const { params, getMovies } = props;

  const [value, setValue] = useState('');
  const history = useHistory();

  const searchChange = (e) => {
    e.preventDefault(),
    getMovies({...params, search: value}),
    history.push(`/search/Search%20${value}`)
  }

  useUpdateEffect(() => {
    params && !params.search && setValue('');
  }, [params && params.search])

  return (
    <form>
      <div className={style.searchWrap}>
        <Input
          type="search"
          placeholder="What do you want to watch?"
          value={value}
          onChange={e => {setValue(e.target.value)}}
          role='textbox'
        />
      </div>
      
      <Button 
        text="Search"
        type="text"
        className="btnPrimary"
        addClassName="btnLarge"
        handleClick={(e) => searchChange(e)}
        role="searchButton"
      />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    params: state.movies.params,
  }
}

const mapDispatchToProps = {
  getMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);