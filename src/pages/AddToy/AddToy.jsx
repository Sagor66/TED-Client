import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet";

const AddToy = () => {

  const { user } = useContext(AuthContext)

  const notifyAdd = () => toast.success("Added Successfully")

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

    const newToy = { image: photo, name, subCategory, seller: { name: sellerName, email: sellerEmail }, price, quantity, description: details, rating, email: user?.email }

    console.log(newToy)

    fetch('https://b7a11-toy-marketplace-server-side-sagor66.vercel.app/newToys', {
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
        notifyAdd()
      }
    })
  }

  return (
    <div className="mb-32">
      <Helmet>
        <title>TED | Add-a-toy</title>
      </Helmet>
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
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
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
            <button className="btn-primary">ADD MY TOY</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
