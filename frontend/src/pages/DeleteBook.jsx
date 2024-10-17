import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        console.log(title);
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error happened. Check console", {
          variant: "error",
        });
        console.log(error);
      });
  }, []);

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://127.0.0.1:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert(`An error happened. Check a console.`);
        console.log(error);
      });
  };

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          {loading
            ? "Loading..."
            : `Are you sure you want to delete book with "${title}" title?`}
        </h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
        <button
          className="p-4 bg-blue-600 text-white m-8 w-50"
          onClick={handleReturn}
        >
          No, Go back
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
