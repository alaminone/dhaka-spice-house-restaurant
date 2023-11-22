import Swal from "sweetalert2";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";

import useAxiosOpen from "../../../huks/openapi/useAxiosOpen";
import useAxiosURL from "../../../huks/axiosUrl/useAxiosURL";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";



const img_hosting_token = "e0e97842c0888508ae58176d4f6aeb0d";
const img_hosting_Api = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const Updateitem = () => {
   
    const {name, category, recipe, price, _id} = useLoaderData();
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

       axiosSecure.patch(`/menu/${_id}`, menuItem)
        .then(response =>{
            if (response.data.modifiedCount > 0) {
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
            mainheading={'update item'}
            ></SectionTitle>
<div className="mx-4 px-10  py-10 rounded-md bg-slate-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea defaultValue={recipe} {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Update menu Item
                    </button>
                </form>
            </div>
            
        </div>
    );
};

export default Updateitem;