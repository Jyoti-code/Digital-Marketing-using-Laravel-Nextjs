
const deleteTestimonial = async (id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteTestimonial/${id}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete testimonial');
    }

    const result = await response.json();
    alert("Testimonial deleted");
    console.log('Testimonial deleted:', result);

  } catch (error) {
    console.error('Error deleting testimonial:', error);
  }
};

export default deleteTestimonial;
