
const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteProduct/${id}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
  
      const result = await response.json();
      alert("Product deleted");
      console.log('Product deleted:', result);
  
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  export default deleteProduct;
  