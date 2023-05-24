import React, { useState } from "react";

type EditableLabelProps = {
  initialValue: string;
  type: string;
};

export default function EditableLabel({
  initialValue,
  type,
}: EditableLabelProps): JSX.Element {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className="focus:outline-0"
        />
      ) : (
        <label onClick={handleClick}>
          {type == "textavatar" && (
            <div className="avatar placeholder mr-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="text-xs">MR</span>
              </div>
            </div>
          )}
          {value}
        </label>
      )}
    </>
  );
}
