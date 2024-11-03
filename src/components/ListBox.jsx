function Opt({ value, option, handlelick }) {
  return (
    <div
      role="option"
      className="option-element py-2 px-3 text-left items-center flex text-md w-full text-base cursor-pointer navigate-item-option bha bat bbj sz bej"
      value={value}
      onClick={() => handlelick(option, value)}
    >
      {`${option} - ${value}`}
    </div>
  );
}

function ListBox({ options, handleClick, handleClose }) {
  return (
    <>
      <div
        className="fj vt wk"
        role="listbox"
        style={{ maxHeight: "224px" }}
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
      >
        {options.map(({ value, option }) => (
          <Opt
            value={value}
            option={option}
            key={value}
            handlelick={handleClick}
          />
        ))}
      </div>
    </>
  );
}

export default ListBox;
