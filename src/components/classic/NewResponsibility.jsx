/* eslint-disable react/prop-types */
export default function NewResponsibility({ value, numbering, handleProExpSectChange }) {
    return (
        <textarea 
            className="font-lora w-100"
            type="text"
            placeholder={`${numbering}- Responsibility`}
            name={`responsibilities1-${numbering}`}
            onChange={handleProExpSectChange} 
            rows={2}
            minLength={60}
            maxLength={200}
            min={60}
            max={200}
            defaultValue={value}
        ></textarea>
    );
}