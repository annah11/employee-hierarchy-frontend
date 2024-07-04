import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPositions } from '../slices/positionSlice';
import PositionListItem from './PositionListItem';

const PositionTree = () => {
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.positions.positions);
  const status = useSelector((state) => state.positions.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPositions());
    }
  }, [status, dispatch]);

  const renderTree = (positions, parentId = null) => {
    return positions
      .filter((position) => position.parentId === parentId)
      .map((position) => (
        <ul key={position.id}>
          <PositionListItem position={position} />
          {renderTree(positions, position.id)}
        </ul>
      ));
  };

  return <div>{renderTree(positions)}</div>;
};

export default PositionTree;
