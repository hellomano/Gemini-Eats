
// This is a mock service. In a real application, this would call
// a service like Google Places API to get restaurant photos.

export const getPhotoUrl = (placeId: string): string => {
  // Using a placeholder image service. The placeId can be used as a seed.
  // This provides some variety in images.
  return `https://picsum.photos/seed/${placeId}/400/300`;
};
