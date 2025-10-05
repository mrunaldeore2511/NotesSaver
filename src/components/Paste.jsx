import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState('');   

  const dispatch = useDispatch(); 
  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    if (!dateString) return 'No date';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  function handleShare(pasteID) {
    const shareUrl = `${window.location.origin}/pastes/${pasteID}`;
    
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        toast.success('Link copied to clipboard!');
      })
      .catch(() => {
        toast.error('Failed to copy link');
      });
  }

  function handleDelete(pasteID){
    dispatch(removeFromPastes(pasteID));
  }

  function handleCopy(content){
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard");
  }

  return (
    <div className='w-full max-w-6xl mx-auto py-8 px-4'>
      {/* Search Bar */}
      <div className='mb-8'>
        <input 
          className="w-full px-6 py-3 text-white bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-400 shadow-lg"
          type="text" 
          placeholder='🔍 Search pastes by title...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Pastes List */}
      <div className='flex flex-col gap-6'>
        {
          filteredData.length > 0 ? (
            filteredData.map((paste) => {
              return (
                <div 
                  key={paste._id} 
                  className='bg-gray-800 border-2 border-gray-700 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300'
                >
                  {/* Title */}
                  <div className='mb-3'>
                    <h2 className='text-2xl font-bold text-white truncate'>
                      {paste.title || 'Untitled'}
                    </h2>
                  </div>

                  {/* Content Preview */}
                  <div className='mb-4'>
                    <p className='text-gray-300 line-clamp-3 whitespace-pre-wrap break-words'>
                      {paste.content || 'No content'}
                    </p>
                  </div>

                  {/* Date */}
                  <div className='mb-4 pb-4 border-b border-gray-700'>
                    <p className='text-sm text-gray-400'>
                      📅 Created: {formatDate(paste.createdAt)}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-3 justify-center'>
                  <NavLink 
                    to={`/?pasteId=${paste._id}`}
                    className='inline-block px-4 py-2 bg-blue-500 !text-white font-medium rounded-lg hover:bg-blue-700 hover:text-white transition-colors shadow-md hover:shadow-lg'
                  >
                    ✏️ Edit
                  </NavLink>

                  <NavLink 
                    to={`/pastes/${paste._id}`}
                    className='inline-block px-4 py-2 bg-green-500 !text-white font-medium rounded-lg hover:bg-green-700 hover:text-white transition-colors shadow-md hover:shadow-lg'
                  >
                    👁️ View
                  </NavLink>

                    <button 
                      onClick={() => handleCopy(paste.content)}
                      className='px-4 py-2 !bg-purple-500 text-white font-medium rounded-lg hover:!bg-purple-700 transition-colors shadow-md '
                    >
                      📋 Copy
                    </button>

                    <button 
                      onClick={() => handleDelete(paste._id)}
                      className='px-4 py-2 !bg-red-500 text-white font-medium rounded-lg hover:!bg-red-700 transition-colors shadow-md hover:shadow-lg'
                    >
                      🗑️ Delete
                    </button>

                    <button 
                      onClick={() => handleShare(paste._id)}
                      className='px-4 py-2 !bg-indigo-500 text-white font-medium rounded-lg hover:!bg-indigo-700 transition-colors shadow-md hover:shadow-lg'
                    >
                      🔗 Share
                    </button>
                  </div>
                </div>
              )
            })
          ) : (
            <div className='bg-gray-800 border-2 border-gray-700 rounded-lg p-12 text-center'>
              <p className='text-2xl text-gray-400 mb-2'>📝 No pastes found</p>
              <p className='text-gray-500'>
                {searchTerm ? 'Try a different search term' : 'Create your first paste to get started!'}
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Paste