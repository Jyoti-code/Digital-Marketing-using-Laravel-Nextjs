
const deleteBanner = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteBanner/${id}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete banner');
      }
  
      const result = await response.json();
      alert("Banner deleted");
      console.log('Banner deleted:', result);
  
    } catch (error) {
      console.error('Error deleting banner:', error);
    }
  };
  
  export default deleteBanner;
  