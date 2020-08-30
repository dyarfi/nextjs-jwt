// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(process.env.JWT_KEY);
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
