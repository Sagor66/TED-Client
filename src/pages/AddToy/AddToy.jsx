const AddToy = () => {

  const handleAddToy = event => {
    event.preventDefault()
    const form = event.target
    const photo = form.photo.value
    const name = form.name.value
    const subCategory = form.subCategory.value
    const sellerName = form.sellerName.value
    const sellerEmail = form.sellerEmail.value
    const price = form.price.value
    const quantity = form.quantity.value
    const details = form.details.value
    const rating = form.rating.value

    const newToy = { photo, name, subCategory, sellerName, sellerEmail, price, quantity, details, rating }

    console.log(newToy)

    fetch('http://localhost:5000/newToys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(data => {
      console.log('sending data from AddToy via POST ', data)
      if (data.insertedId) {
        alert('added successfully')
      }
    })
  }

  return (
    <div className="mb-32">
      <h2 className="text-heading mt-16">ADD A TOY</h2>
      <form onSubmit={handleAddToy} className="card flex-shrink-0 w-full max-w-7xl shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              type="text"
              name="photo"
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
                name="name"
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
                name="subCategory"
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
                name="sellerName"
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
                name="sellerEmail"
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
                name="price"
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
                name="quantity"
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
                name="details"
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
                name="rating"
                placeholder="rating"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">ADD MY TOY</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;