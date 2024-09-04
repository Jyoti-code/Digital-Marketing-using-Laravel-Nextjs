
const deleteAbout = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteAbout/${id}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete about');
      }
  
      const result = await response.json();
      alert("About deleted");
      console.log('About deleted:', result);
  
    } catch (error) {
      console.error('Error deleting about:', error);
    }
  };
  
  export default deleteAbout;
  