import React, { useEffect } from 'react';

const ARModelViewer = () => {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    <div style={{ color: 'black' }}>
      <model-viewer 
        src="STANDEEROVER-v2.glb" 
        ar 
        camera-controls 
        auto-rotate 
        style={{ width: '100vw', height: '100vh' }}
      >
      </model-viewer>
    </div>
  );
};

export default ARModelViewer;
