const NoResults = () => {
    return (
      <div className="flex flex-col items-center justify-center text-center text-neutral-500 space-y-4">
        <div className="text-2xl  items-center text-center font-bold">No Product Found</div>
        <img
          src="https://media.giphy.com/media/EeIX8IZvvGZ2CRCWSO/giphy.gif?cid=790b761149ocnus8h9hjs9yrhccm14oamlhjfyn1fzlq763x&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Sad Emoji"
          className="w-26 h-26 animate-bounce"
        />
      </div>
    );
  };
  
  export default NoResults;
  