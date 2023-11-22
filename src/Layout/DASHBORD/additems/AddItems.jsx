import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import useAxiosOpen from "../../../huks/openapi/useAxiosOpen";
import useAxiosURL from "../../../huks/axiosUrl/useAxiosURL";
import Swal from "sweetalert2";


const img_hosting_token = "e0e97842c0888508ae58176d4f6aeb0d";
const img_hosting_Api = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
const AddItems = () => {
  const axiosopenApi = useAxiosOpen();
  const axiosSecure = useAxiosURL();
  const { register, handleSubmit, reset } = useForm();
 
  const onSubmit = async (data) => {
    console.log(data);
    const imagefile = { image: data.image[0] };

    const res = await axiosopenApi.post(img_hosting_Api, imagefile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data) {
        const img = res.data.data.url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: img,
      };
      console.log(img)

     axiosSecure.post("/menu", menuItem)
        .then(response =>{
            if (response.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.name} added successfully`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            console.log('nhhhh',response)
        })
    
    }

    
  };

  return (
    <div>
      <SectionTitle
        subheading={"What's new?"}
        mainheading={"ADD AN ITEM"}
      ></SectionTitle>
      <div className="mx-4 px-10  py-10 rounded-md bg-slate-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="Pick One"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Pick One</option>
                <option>pizza</option>
                <option>soup</option>
                <option>salad</option>
                <option>dessert</option>
             
                <option>drinks</option>
              </select>
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Item Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
          <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;

