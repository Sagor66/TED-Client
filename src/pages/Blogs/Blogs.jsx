
const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto my-32 space-y-3">
      <h3 className="text-3xl font bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
      <p className="text-xl">Access token grant permission to access specific resource on behalf of a user. Refresh token is used to obtain a new access token when the current one expires. They work after the user successful authenticates and authorizes the application. They can be stored in secure HTTP-only cookies or browser's local storage</p>
      <h3 className="text-3xl font bold">Compare SQL and NoSQL databases?</h3>
      <ul className="text-xl list-disc">
        <li>SQL is relational Database. NoSQL is Non-Relational Database</li>
        <li>SQL scale vertically. NoSQL scale horizontally</li>
        <li>SQL has rigid schema. NoSQL's each record can have it's own schema</li>
        <li>SQL use Structured Query Language. NoSQL provide own query language</li>
      </ul>
      <h3 className="text-3xl font bold">What is express js? What is Nest JS (google it)? </h3>
      <p className="text-xl">Express.js is a framework for Node.js Next.js is build on top of Express.js and it is a progressive Node.js framework for server-side applications</p>
      <h3 className="text-3xl font bold">What is MongoDB aggregate and how does it work (google it)?</h3>
      <p className="text-xl">MongoDB's aggregate is a powerful framework for performing data aggregation operations on collections of documents. It has a pipeline of multiple stages. Each stage applies a specific operation and passes the result to next stage</p>
    </div>
  );
};

export default Blogs;