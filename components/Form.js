import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";
import { FiArrowRightCircle, FiPlusCircle, FiXCircle } from "react-icons/fi";
import FileSend from "./FileSend";
export default function FormElement() {
  const fieldStyle = "w-full border outline-none  p-2 mb-3";
  const validationSchema = yup.object().shape({
    phones: yup.array().of(yup.string().required()),
    company: yup.string().required("This field is required"),
    manager: yup.string().required("This field is required"),
    factory_address: yup.string().required("This field is required"),
    admin_address: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    products: yup.array().of(
      yup.object().shape({
        product_name: yup.string().required("This field is required"),
        category: yup.string().required("This field is required"),
        price: yup.string().required("This field is required"),
        moq: yup.string().required("This field is required"),
      })
    ),
  });
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          phones: [],
          company: "",
          manager: "",
          factory_address: "",
          admin_address: "",
          email: "",
          products: [{ product_name: "", category: "", price: "", moq: "" }],
        }}
      >
        {({ values, errors }) => (
          <Form className=' '>
            <p className='mb-3'>Company / Contact Details</p>
            <div className=''>
              <Field
                placeholder="Company's name"
                name='company'
                className={`${fieldStyle}`}
                required
              />
            </div>
            <div>
              <Field
                placeholder="Sales Manager/ Director's name"
                className={`${fieldStyle}`}
                name='manager'
                required
              />
            </div>
            <div>
              <Field
                placeholder='Factory Address'
                className={`${fieldStyle}`}
                name='factory_address'
                required
              />
            </div>
            <div>
              <Field
                placeholder='Admin Office Address'
                className={`${fieldStyle}`}
                name='admin_address'
                required
              />
            </div>
            <div>
              <Field
                placeholder='Email'
                className={`${fieldStyle}`}
                name='email'
                type='email'
                required
              />
            </div>
            <FieldArray
              name='phones'
              render={(arrayHelper) => (
                <div className='my-5'>
                  <p className='mb-3'>Company{"'"}s phone numbers</p>
                  {values.phones.map((phone, index) => (
                    <div
                      key={index}
                      className='w-full flex items-center justify-between'
                    >
                      <Field
                        placeholder='Enter phone number'
                        name={`phones.${index}`}
                        type='number'
                        required
                        className={`w-11/12 mr-2 border rounded p-2 mb-2`}
                      />
                      <button
                        className=''
                        onClick={() => arrayHelper.remove(index)}
                      >
                        <FiXCircle />
                      </button>
                    </div>
                  ))}
                  <button
                    className='flex items-center text-sm font-light border rounded p-2'
                    onClick={() => arrayHelper.push("")}
                  >
                    <FiPlusCircle className='mr-2' /> Add field
                  </button>
                </div>
              )}
            />
            <div className=''>
              <p>Products Detials</p>
              <FieldArray
                name='products'
                render={(arrayHelper) => (
                  <div>
                    {values.products.map((item, index) => (
                      <div
                        key={index}
                        className='shadow-md border p-3 rounded my-5 mx-1'
                      >
                        <div>
                          {index > 0 && (
                            <button
                              className='mb-3 flex items-center text-sm font-light border rounded p-2'
                              onClick={() => arrayHelper.remove(index)}
                            >
                              <FiPlusCircle className='mr-2' /> Remove these
                              fields
                            </button>
                          )}
                        </div>
                        <div>
                          <Field
                            placeholder='Product name'
                            className={`${fieldStyle}`}
                            name={`products.${index}.product_name`}
                            required
                          />
                        </div>
                        <div>
                          <Field
                            placeholder='Product category'
                            className={`${fieldStyle}`}
                            required
                            name={`products.${index}.category`}
                          />
                        </div>
                        <div>
                          <Field
                            placeholder='Wholesale price/unit'
                            className={`${fieldStyle}`}
                            required
                            name={`products.${index}.price`}
                          />
                        </div>
                        <div>
                          <Field
                            placeholder='Minimum order quantity'
                            className={`${fieldStyle}`}
                            required
                            name={`products.${index}.moq`}
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      className='flex items-center text-sm font-light border rounded p-2'
                      onClick={() =>
                        arrayHelper.push({
                          product_name: "",
                          category: "",
                          price: "",
                          moq: "",
                        })
                      }
                    >
                      <FiPlusCircle className='mr-2' /> Add fields
                    </button>
                  </div>
                )}
              />
            </div>
            {/* <FileSend /> */}
            <div className='flex justify-end'>
              <button
                type='submit'
                className='border px-3 py-2 rounded flex items-center'
              >
                Register products <FiArrowRightCircle className='ml-1' />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
