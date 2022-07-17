import tw from "tailwind-styled-components";

export const Button = tw.button`
  bg-secondary hover:bg-amber-300 
  transition-all 
  mt-8 w-full h-12 
  flex justify-center items-center 
  py-2 px-4 
  border border-transparent rounded-md 
  font-bold text-gray-900 
  focus:outline-none focus:border-secondary focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-secondary
`;
