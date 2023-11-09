

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-2 h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-black dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-black dark:bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-black dark:bg-violet-400"></div>
      </div>
    </div>
  );
};

export default Loading;
