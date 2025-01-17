import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Какие документы я могу хранить в Travas?',
    answer: 'В Travas вы можете хранить данные об авиа билетах, жд билетах, бронях в отелях и записях на экскурсии.'
  },
  {
    question: 'Как Travas защищает мои данные?',
    answer: 'Мы используем передовые технологии шифрования для защиты ваших данных. Вся информация хранится на защищенных серверах и доступна только вам.'
  },
  {
    question: 'Что нужно для загрузки своих документов в Travas?',
    answer: 'Для сохранения информации о авиа и жд билетах всё что вам нужно это номер рейса или поезда. Всю остальную информацию нам предоставляют наши партнёры!'
  },
  {
    question: 'Если мой рейс отменят я получу уведомление?',
    answer: 'Да. При любом изменении в расписании Travas как можно скорее уведомит вас об этом по почте.'
  },
  {
    question: 'Как я могу связаться с поддержкой Travas?',
    answer: 'Вы можете связаться с нашей службой поддержки через раздел "Контакты" на нашем сайте.'
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
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
          Часто задаваемые вопросы
        </motion.h1>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </main>
    </div>
  );
}