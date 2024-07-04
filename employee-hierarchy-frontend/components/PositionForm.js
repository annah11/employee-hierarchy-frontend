import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPosition } from '../slices/positionSlice';

const PositionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addPosition(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        {...register("name", { required: true })}
        placeholder="Position Name"
      />
      {errors.name && <span>This field is required</span>}
      <textarea
        name="description"
        {...register("description")}
        placeholder="Position Description"
      />
      <input
        name="parentId"
        {...register("parentId")}
        placeholder="Parent ID"
      />
      <button type="submit">Add Position</button>
    </form>
  );
};

export default PositionForm;
