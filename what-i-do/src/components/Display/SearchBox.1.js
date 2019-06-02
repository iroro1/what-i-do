import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className=''>
    <h6 className='text-center text-primary mt-5'>Search for a Service.</h6>
    <form className='form-group mt-2 d-flex flex-column sixty'>
        <div className='d-flex my-2'>
        <input className='form-control col-md-6 bg-light text-dark input-group-prepend' type='text' name='serv' placeholder='Service' searchChange={this.onservChange}/>
        <input className='form-control col-md-6 ml-1 bg-light text-dark input-group-prepend' type='text' name='loc' placeholder='Location' locChange={this.onlocChange}/>
        </div>
        {/* <input type='submit' value='Search' className='btn btn-primary text-white btn-block my- '/> */}
    </form>
   </div>
  );
}

export default SearchBox;