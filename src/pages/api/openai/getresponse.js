export default function handler(req, res) {
  console.log("hello from openai endpoint");
  res.status(200).json({ name: "John Doe" });
}
