import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ReviewForm.module.css";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const ReviewFormSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short! This field must be at least three characters long!").max(50, "Too Long!").required("This field is required"),
  email: Yup.string().email("Invalid email format").min(3, "Too short! This field must be at least three characters long!").max(50, "Too Long!").required("This field is required"),
  bookingDate: Yup.date().required("This field is required").typeError("Invalid date format"),
  comment: Yup.string().min(3, "Too short! This field must be at least three characters long!").max(150, "Too Long!"),
});

const ReviewForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/catalog");
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ReviewFormSchema}>
        <Form className={css.form}>
          <label htmlFor="name">
            <Field type="text" name="name" placeholder="Name" className={css.input} />
            <ErrorMessage component="span" name="name" />
          </label>
          <label htmlFor="email">
            <Field type="email" name="email" placeholder="Email" className={css.input} />
            <ErrorMessage component="span" name="email" />
          </label>
          <label htmlFor="bookingDate">
            <Field type="date" name="bookingDate" className={css.input} />
            <ErrorMessage component="span" name="bookingDate" />
          </label>
          <label htmlFor="comment">
            <Field as="textarea" name="comment" placeholder="Comment" />
            <ErrorMessage component="span" name="comment" />
          </label>
          <button type="submit" className={css.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReviewForm;
