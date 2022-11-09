import styled from "styled-components";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const Formulario = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",      
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <span className="header"></span>
      <form onSubmit={formik.handleSubmit}>
        <span className="divsion">
          <span className="etiqueta">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? <div className="error"><p>{formik.errors.name}</p></div> : null}
          </span>
          <span className="etiqueta">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </span>
          <span className="etiqueta">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </span>
        </span>
        <span className="divsion">
          <span className="etiqueta">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </span>
          <label htmlFor="zip">Zip</label>
          <input
            id="zip"
            name="zip"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.zip}
          />
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
        </span>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

export default Formulario;

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header{
    width: 100%;
    height: 90px;
    background-color: #000;
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .divsion{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto; 
      border: 1px solid red;
      margin: 10px 0;
      .etiqueta{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: auto;
        border: 1px solid blue;
        label{
          color: #000;
          font-size: 20px;
          font-weight: 600;
          margin: 10px;
  
        }
        input{
          margin: 10px;
          padding: 10px;
          border: 1px solid #000;
          border-radius: 5px;
          width: 200px;
          height: 40px;
          font-size: 20px;
          font-weight: 600;
          color: #000;
  
        }
        .error{
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          p{
            color: red;
            font-size: 20px;
            font-weight: 600;
          }
        }
      }
    }
    button{
      margin: 10px;
      padding: 10px;
      border: 1px solid #000;
      border-radius: 5px;
      background-color: #000;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
  }
  `