import { DollarSign, ShoppingBag, TrendingUp } from 'lucide-react';

export function CierreCaja() {

  const stats = [
    {id: 1, label: 'Total ventas', value: '$0.00', icon: <DollarSign className='text-green-600'/>, textColor: 'text-green-600', bgcolor:'bg-green-100' },
    {id: 2, label: 'Transacciones', value: '0', icon: <ShoppingBag className='text-blue-600'/>, textColor: 'text-blue-600', bgcolor: 'bg-blue-100'},
    {id: 3, label: 'Ticket Promedio', value: '$0.00', icon: <TrendingUp className='text-orange-500'/>, textColor: 'text-orange-500', bgcolor: 'bg-orange-100'},
  ]
  return (
    <div className='flex flex-col md:flex-row gap-6 w-full p-6 bg-gray-50/50'>
        {stats.map((item) => (
          <div key={item.id} className='flex flex-row items-center justify-between w-full px-6 py-5 bg-white rounded-xl shadow-sm border border-gray-100'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-medium text-gray-700'>{item.label}</p>
              <p className={`text-3xl font-bold tracking-tight ${item.textColor}`}>{item.value}</p>
            </div>
            <div className={`flex items-center justify-center w-14 h-14 rounded-full ${item.bgcolor}`}>
              {item.icon}
              </div>  
            </div>
        ))}
      </div>
  );
}