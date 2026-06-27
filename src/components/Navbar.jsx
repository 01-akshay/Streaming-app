import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { searchQuery } from '../features/common/commonSlice';


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    let {value} = e.target;
    dispatch(searchQuery(value));
    if (value.length > 3) {
      navigate("/search")
    }
     }
      

  return (
<div className="bg-slate-950 fixed top-0 w-full z-50 bg-opacity-40 hover:bg-opacity-100">
    <div className='max-w-7x1 px-4 mx-auto flex items-center'>
        <div className='text-white font-bold text-2-1 py-2'>Streaming App</div>
        <div className='ms-5 flex gap-3 text-blue-50'>
            <Link to="/">Home</Link>
            <Link to="/browse/tv">Tv Shows</Link>
            <Link to="/browse/movie">Movies</Link>
            <Link to="/browsebygenre/movie/28">Browse By Genre</Link>
        </div>
        <div classname="ms-auto">
          <input type="text" className="px-3 py-1" onChange={handleSearch} />
        </div>
     </div>
</div>
  )
  }


export default Navbar