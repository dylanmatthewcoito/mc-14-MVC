const deleteBtnHandler = async (event) => {
    if (event.target.matches('.post-list .delete-button')) {
      const id = event.target.getAttribute('data-id');
    
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };
    
  document
    .querySelector('.post-list')
    .addEventListener('click', deleteBtnHandler);