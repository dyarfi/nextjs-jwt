const CODE = 200;

export default (req, res) => {
  return new Promise(resolve => {
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
          break;
      }
      res.statusCode = CODE;
      res.json({ message });
    } catch (error) {
      throw error;
    }
    res.status(405).end();
    return resolve();
  });
};
