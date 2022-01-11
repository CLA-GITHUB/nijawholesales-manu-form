import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FormElement from "../components/Form";
export default function Home() {
  return (
    <div className='font-poppins px-5'>
      <div className='my-10'>
        <p className='text-center capitalize text-2xl text-green-500 font-semibold'>
          NijaWholeSales manufacturers registeration form
        </p>
        <p className='text-center text-yellow-500'>
          Fill carefully, all fields are required
        </p>
      </div>
      <div className='max-w-lg mx-auto my-4'>
        <FormElement />
      </div>

      <style global='true' jsx>
        {`
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
      </style>
    </div>
  );
}
