import React, { useState } from 'react';

const Toggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Write password"
          className="h-20 w-[400px] border-4 p-4 rounded-lg text-2xl pr-16"
        />
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
