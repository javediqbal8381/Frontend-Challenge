import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useItemsStore from "../store/useItemStore";
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AddItem = () => {
  const { items, fetchItems, addItem } = useItemsStore()
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length === 0) {
      fetchItems();
    }
  }, []);

  const [form, setForm] = useState({
    name: "",
    price: "",
    img: "",
  });

  const handleChange = (e) => {
    // update form state  
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if form is valid
    if (form.name.trim() === "" || form.name.length < 3) {
      toast.error("Product name should be at least 3 characters long");
      return;
    }
    // for validation
    if (isNaN(form.price) || form.price.trim() === "") {
      toast.error("Price must be a number");
      return;
    }

    // update form state
    if (!form.img.startsWith("https")) {
      toast.error("Image URL must start with http or https");
      return;
    }
    // auto assign id based on current length of items
    // we have to find the maximum id in items and add 1
    const maxId = items.reduce((max, item) => Math.max(max, item.id), 0);
    form.id = maxId + 1;
    addItem(form);
    setForm({ name: "", price: "", img: "" });
    toast.success("Product added successfully!");
    setTimeout(() => {
      navigate("/products");
    }, 1000);
  };

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Add New Product
        </h1>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="price"
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              required
            />
            <Input
              name="img"
              placeholder="Image URL"
              value={form.img}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full text-black shadow-md hover:bg-gray-100">
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default AddItem;
