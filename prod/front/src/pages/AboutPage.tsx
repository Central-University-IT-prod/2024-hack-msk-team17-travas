import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import silchev from '../assets/silchev.jpg';
import budigin from '../assets/budigin.jpg';
import kozlov from '../assets/kozlov.jpg';
import tarasov from '../assets/tarasov.jpg';
import emelyanov from '../assets/emelyanov.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-white shadow-sm">
       <div className="flex justify-between items-center px-6 py-4">
          <Link to="/" className="text-3xl font-bold text-green-600">Travas</Link>
          <Link to="/" className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
            На главную
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          О нас
        </motion.h1>

        <motion.p 
          className="text-xl text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
            Мы - команда энтузиастов. У нас маленький опыт в реальной разработке, но есть огромная мотивация работать и учиться чему-то новому
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={silchev} 
              alt="Сильчев Антон" 
              className="w-48 h-48 rounded-full mb-4 object-cover" 
            />
            <h2 className="text-xl font-semibold">Сильчев Антон</h2>
            <p className="text-gray-600">Фронтенд</p>
            <p className="text-gray-600">Бэкенд</p>
            <p className="text-gray-600">DevOps</p>


          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img 
              src={budigin} 
              alt="Будыгин Тимофей" 
              className="w-48 h-48 rounded-full mb-4 object-cover" 
            />
            <Link to="/peter" className="text-xl font-semibold">Будыгин Тимофей</Link>
            <p className="text-gray-600">Босс</p>
            <p className="text-gray-600">Бэкенд</p>
            <p className="text-gray-600">БД</p>

          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={kozlov} 
              alt="Козлов Сергей" 
              className="w-48 h-48 rounded-full mb-4 object-cover" 
            />
            <h2 className="text-xl font-semibold">Козлов Сергей</h2>
            <p className="text-gray-600">Бэкенд</p>
            <p className="text-gray-600">БД</p>
            <p className="text-gray-600">DevOps</p>

          </motion.div>     
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img 
              src={tarasov} 
              alt="Тарасов Григорий" 
              className="w-48 h-48 rounded-full mb-4 object-cover" 
            />
            <h2 className="text-xl font-semibold">Тарасов Григорий</h2>
            <p className="text-gray-600">Бэкенд</p>
            <p className="text-gray-600">Почтовая рассылка</p>

          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src={emelyanov} 
              alt="Емельянов Дмитрий" 
              className="w-48 h-48 rounded-full mb-4 object-cover" 
            />
            <h2 className="text-xl font-semibold">Емельянов Дмитрий</h2>
            <p className="text-gray-600">Фронтенд</p>
            <p className="text-gray-600">Бэкенд</p>

          </motion.div>
        </div>
      </main>
    </div>
  );
}
