
const deleteCategory = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteCategory/${id}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete category');
      }
  
      const result = await response.json();
      alert("Category deleted");
      console.log('Category deleted:', result);
  
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };
  
  export default deleteCategory;
  