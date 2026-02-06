import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "300px" }}>
        <h2 className="text-center mb-3">Bootstrap UI Demo</h2>
        <input className="form-control" placeholder="Enter name" />
        <button className="btn btn-primary mt-3 w-100">Submit</button>
      </div>
    </div>
  );
}

export default App;
