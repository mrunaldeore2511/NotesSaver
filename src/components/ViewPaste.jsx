import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);
  console.log("final paste", paste);

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

  if (!paste) {
    return (
      <div className='w-full max-w-5xl mx-auto py-20 px-4'>
        <div className='bg-gray-800 border-2 border-gray-700 rounded-lg p-8 text-center'>
          <h1 className='text-3xl font-bold text-red-400 mb-2'>Paste Not Found!</h1>
          <p className='text-gray-400'>The paste you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full max-w-5xl mx-auto py-8 px-4'>
      <div className='bg-gray-800 border-2 border-gray-700 rounded-lg p-6 shadow-xl'>
        {/* Header with Title */}
        <div className='mb-6'>
          <label className='block text-sm font-semibold text-gray-400 mb-2'>Title</label>
          <input 
            className="w-full px-4 py-3 text-white bg-gray-900 border-2 border-gray-600 rounded-lg cursor-not-allowed opacity-90"
            type="text" 
            value={paste.title || 'Untitled'} 
            disabled
            readOnly
          />
        </div>

        {/* Content */}
        <div className='mb-6'>
          <label className='block text-sm font-semibold text-gray-400 mb-2'>Content</label>
          <textarea 
            className='w-full px-4 py-3 text-white bg-gray-900 border-2 border-gray-600 rounded-lg resize-none cursor-not-allowed opacity-90'
            value={paste.content || 'No content'} 
            disabled
            readOnly
            rows={20}
          />
        </div>

        {/* Footer with Date */}
        <div className='flex justify-between items-center pt-4 border-t-2 border-gray-700'>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-semibold text-gray-400'>Created:</span>
            <span className='text-sm text-gray-300'>{formatDate(paste.createdAt)}</span>
          </div>
          <div className='text-sm text-gray-500'>
            ID: {paste._id}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPaste