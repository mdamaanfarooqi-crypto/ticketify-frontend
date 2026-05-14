import React from 'react';
import { TicketIcon } from '../components/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-8 bg-gradient-to-r from-red-600 to-red-500 text-white'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center space-x-2'>
            <TicketIcon className='w-6 h-6' />
            <span className='text-xl font-bold'>Ticketify</span>
            <span>🍿</span>
          </div>
          <p className='text-white/80 text-sm text-center'>
            &copy; {currentYear} Amaanullah farooqi. All rights reserved.
          </p>
          <div className='flex items-center space-x-4 text-white/60 text-xs'>
            <span>Powered by TMDB</span>
            <span>•</span>
            <span>Spring Boot</span>
            <span>•</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}