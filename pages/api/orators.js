export default (req, res) => {
  res.statusCode = 200;
  res.json([
    { name: "John Doe" },
    { name: "Beck" },
    { name: "Dave Grohl" },
    { name: "David Hasselhoff" },
  ]);
};
