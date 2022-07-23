import tw from "tailwind-styled-components";

export const InputForm = tw.input`
  relative 
  w-full h-12 px-3 py-2 pl-10
  border rounded-md 
  placeholder-gray-500 text-gray-900 
  focus:outline-none focus:border-secondary focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-secondary text-base
`;
