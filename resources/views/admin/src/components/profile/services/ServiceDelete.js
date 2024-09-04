
const deleteServices = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteServices/${id}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete services');
      }
  
      const result = await response.json();
      alert("Services deleted");
      console.log('Services deleted:', result);
  
    } catch (error) {
      console.error('Error deleting services:', error);
    }
  };
  
  export default deleteServices;
  