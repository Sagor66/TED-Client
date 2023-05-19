const AddToy = () => {
  return (
    <div className="mb-32">
      <h2 className="text-heading mt-32 ">ADD A TOY</h2>
      <div className="card flex-shrink-0 w-full max-w-7xl shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              type="text"
              placeholder="URL"
              className="input input-bordered"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Category</span>
              </label>
              <input
                type="text"
                placeholder="category"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                placeholder="seller name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="text"
                placeholder="seller email"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                placeholder="quantity"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-5">
            <div className="form-control col-span-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                placeholder="details"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="rating"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
