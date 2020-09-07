const CODE = 200;

export default (req, res) => {
  const { method } = req;
  let message = {};
  try {
    switch (method) {
      case 'POST':
        /* Post method */
        break;
      case 'PUT':
        /* Put method */
        break;
      case 'PATCH':
        /* Patch method */
        break;
      /* Get */
      default:
    }
    res.statusCode = CODE;
    res.json({ message });
  } catch (error) {
    throw error;
  }
};
