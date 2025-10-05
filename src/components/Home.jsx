import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  
  const pastes = useSelector(state => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    } else {
      setTitle('');
      setValue('');
    }
  }, [pasteId, pastes]);
  
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function createPaste(){

    if(title.trim().length === 0){
      toast.error("Title cannot be empty");
      return;
    }
    
    if(value.trim().length === 0){
      toast.error("Content cannot be empty");
      return;
    }
    const paste={
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: pasteId 
        ? pastes.find((p) => p._id === pasteId)?.createdAt 
        : new Date().toISOString()
    }

    if(pasteId){
      dispatch(updateToPastes(paste));
    }
    else{
      dispatch(addToPastes(paste));
    }
    setTitle('');
    setValue('');
    navigate('/')
  }


  return (
    <div className='w-[600px] mx-auto py-8 px-4'>
      <div className="w-full flex flex-col sm:flex-row gap-4 mb-6">
        <input 
          className='flex-1 px-4 py-3 text-white bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-400'
          type="text" 
          placeholder='Enter title here...' 
          value={title} 
          onChange={handleTitle} />

        <button 
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
          onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      <div className='w-[100%]'>
        <textarea 
          className='w-full px-4 py-3 text-white bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-400 resize-none'
          value={value} 
          placeholder='Enter content here...' 
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default Home