import { useState, useEffect } from 'react';

export default function Semaforo() {
  const [luz, setLuz] = useState<'rojo' | 'amarillo' | 'verde'>('rojo');
  const [contador, setContador] = useState<number>(5);

  useEffect(() => {
    const temporizador = setInterval(() => {
      setContador((prev) => {
        if (prev === 0) {
          if (luz === 'rojo') {
            setLuz('verde');
          } else if (luz === 'verde') {
            setLuz('amarillo');
          } else if (luz === 'amarillo') {
            setLuz('rojo');
          }
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(temporizador);
  }, [luz]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="text-white text-4xl font-bold mb-4">{contador}</div>
        <div className="flex flex-col space-y-4">
          <div
            className={`w-20 h-20 rounded-full ${
              luz === 'rojo' ? 'bg-red-600' : 'bg-red-900'
            }`}
          ></div>
          <div
            className={`w-20 h-20 rounded-full ${
              luz === 'amarillo' ? 'bg-yellow-400' : 'bg-yellow-900'
            }`}
          ></div>
          <div
            className={`w-20 h-20 rounded-full ${
              luz === 'verde' ? 'bg-green-500' : 'bg-green-900'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};