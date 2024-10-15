const Loader = ({ className }: { className?: string }) => {
  return (
    // <svg
    //   width="12"
    //   height="12"
    //   viewBox="0 0 12 12"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className}
    // >
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M11.3333 6C11.7015 6 12.0039 6.29963 11.9635 6.6656C11.6324 9.66608 9.08874 12 6 12C2.68629 12 0 9.31371 0 6C0 3.91659 1.06187 2.0812 2.67393 1.00551C2.98044 0.800985 3.38556 0.932278 3.5545 1.25975V1.25975C3.72325 1.58684 3.59149 1.9852 3.29192 2.19901C2.10631 3.04524 1.33333 4.43235 1.33333 6C1.33333 8.57733 3.42267 10.6667 6 10.6667C8.35167 10.6667 10.2971 8.92718 10.6197 6.66469C10.6717 6.30019 10.9651 6 11.3333 6V6Z"
    //     fill="#3B82F6"
    //   />
    // </svg>
    <div
      className={
        " border-[1.5px] h-3 w-3 animate-rotate border-blue-500 border-t-gray-200 rounded-full"
      }
    ></div>
  );
};

export default Loader;
