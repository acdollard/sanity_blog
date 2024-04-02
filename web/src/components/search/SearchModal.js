import React, { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md'
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import { SearchModalContext } from '../../context/searchModalContext';
import SearchField from './SearchField';
import ActionButton from '../buttons/ActionButton';

function Search() {
  const { isSearchModalOpen, closeSearchModal } = useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOnFocus = () => {
    console.log('focused');
  }

  if (!isSearchModalOpen) return null;
  return (
  <SearchModalStyles>
    <div className='modal__container'>
      <ActionButton className='close' onClick={() => 
      closeSearchModal()}>
        <MdClose/>
      </ActionButton>
      <SearchField
        value={searchQuery}
        setValue={setSearchQuery}
        onFocus={handleOnFocus}
      />
    </div>
  </SearchModalStyles>
  )
};


export default Search;