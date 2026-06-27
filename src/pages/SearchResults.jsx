import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSearchQuery } from '../features/common/commonSlice'

const SearchResults = () => {
    const query = useSelector(selectSearchQuery);
    const [videoBySearch, setVideoBySearch] = useState();
    const fetchSearchResults = async () => {

    }
   
    useEffect(() => {

    },[query])

  return (
    <div>SearchResults</div>
  )
}

export default SearchResults