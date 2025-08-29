import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const motorcycles = [
    {
      id: 1,
      name: 'KTM 450 EXC',
      type: 'Эндуро',
      power: '55 л.с.',
      price: '3500₽/день',
      image: '/img/7fdc857c-0292-4331-8e8c-8e24c00c3987.jpg',
      features: ['Лёгкий', 'Мощный', 'Надёжный']
    },
    {
      id: 2,
      name: 'Yamaha WR450F',
      type: 'Эндуро',
      power: '52 л.с.',
      price: '3200₽/день',
      image: '/img/7fdc857c-0292-4331-8e8c-8e24c00c3987.jpg',
      features: ['Комфорт', 'Проходимость', 'Экономичный']
    },
    {
      id: 3,
      name: 'Can-Am Outlander',
      type: 'Квадроцикл',
      power: '78 л.с.',
      price: '4200₽/день',
      image: '/img/a64315dd-572e-4f91-aa3e-e1711f51434b.jpg',
      features: ['4WD', 'Грузоподъёмность', 'Стабильность']
    }
  ];

  const routes = [
    {
      id: 1,
      name: 'Горные вершины',
      distance: '85 км',
      duration: '6 часов',
      difficulty: 'Сложный',
      image: '/img/fa779b57-07e9-45d8-bcf9-1fe52cdff92e.jpg',
      price: '8500₽'
    },
    {
      id: 2,
      name: 'Лесные тропы',
      distance: '42 км',
      duration: '3 часа',
      difficulty: 'Средний',
      image: '/img/fa779b57-07e9-45d8-bcf9-1fe52cdff92e.jpg',
      price: '5200₽'
    },
    {
      id: 3,
      name: 'Речные переправы',
      distance: '67 км',
      duration: '5 часов',
      difficulty: 'Экстремальный',
      image: '/img/fa779b57-07e9-45d8-bcf9-1fe52cdff92e.jpg',
      price: '7800₽'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-beige/20 to-earth-brown/10">
      {/* Header */}
      <header className="bg-charcoal text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Mountain" size={28} className="text-adventure-orange" />
            <h1 className="text-2xl font-bold">ENDURO ADVENTURES</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#rent" className="hover:text-adventure-orange transition-colors">Аренда</a>
            <a href="#tours" className="hover:text-adventure-orange transition-colors">Туры</a>
            <a href="#routes" className="hover:text-adventure-orange transition-colors">Маршруты</a>
            <a href="#safety" className="hover:text-adventure-orange transition-colors">Безопасность</a>
            <a href="#contacts" className="hover:text-adventure-orange transition-colors">Контакты</a>
          </nav>
          <Button className="bg-adventure-orange hover:bg-adventure-orange/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.4), rgba(139, 69, 19, 0.3)), url('/img/7fdc857c-0292-4331-8e8c-8e24c00c3987.jpg')` 
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide">
            ПОКОРИ
            <br />
            <span className="text-adventure-orange">ДИКУЮ ПРИРОДУ</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Аренда эндуро мотоциклов и квадроциклов для незабываемых приключений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-adventure-orange hover:bg-adventure-orange/90 text-lg px-8 py-6">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать тур
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-6">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Аренда мотоциклов */}
      <section id="rent" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Выбери свою <span className="text-adventure-orange">машину</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональная техника для любого уровня подготовки
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorcycles.map((bike) => (
              <Card key={bike.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-adventure-orange">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-adventure-orange">{bike.type}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-charcoal">{bike.name}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Icon name="Zap" size={16} className="mr-1 text-adventure-orange" />
                      {bike.power}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bike.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-adventure-orange">{bike.price}</span>
                    <Button className="bg-forest-green hover:bg-forest-green/90">
                      Арендовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Бронирование */}
      <section className="py-20 bg-gradient-to-r from-forest-green to-forest-green/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Система бронирования
            </h2>
            
            <Tabs defaultValue="bike" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="bike" className="text-lg">Аренда техники</TabsTrigger>
                <TabsTrigger value="tour" className="text-lg">Групповой тур</TabsTrigger>
              </TabsList>
              
              <TabsContent value="bike">
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Выберите дату</h3>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal bg-white/10 border-white/30 hover:bg-white/20">
                              <Icon name="CalendarDays" size={16} className="mr-2" />
                              {selectedDate ? selectedDate.toLocaleDateString('ru-RU') : 'Выберите дату'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Детали аренды</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span>Продолжительность:</span>
                            <span>1 день</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Депозит:</span>
                            <span>15 000₽</span>
                          </div>
                          <div className="flex justify-between text-xl font-bold">
                            <span>Итого:</span>
                            <span className="text-adventure-orange">3 500₽</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button size="lg" className="w-full mt-8 bg-adventure-orange hover:bg-adventure-orange/90 text-lg py-6">
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Забронировать сейчас
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tour">
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardContent className="p-8 text-center">
                    <Icon name="Users" size={48} className="mx-auto mb-4 text-adventure-orange" />
                    <h3 className="text-2xl font-bold mb-4">Групповые туры</h3>
                    <p className="mb-6">Присоединяйтесь к организованным группам для совместных приключений</p>
                    <Button size="lg" className="bg-adventure-orange hover:bg-adventure-orange/90">
                      Посмотреть расписание
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Популярные маршруты */}
      <section id="routes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Популярные <span className="text-adventure-orange">маршруты</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Исследуйте захватывающие места с проверенными гидами
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {routes.map((route) => (
              <Card key={route.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={route.image} 
                    alt={route.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{route.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <Badge className={`${
                      route.difficulty === 'Сложный' ? 'bg-red-500' :
                      route.difficulty === 'Средний' ? 'bg-yellow-500' :
                      'bg-red-600'
                    }`}>
                      {route.difficulty}
                    </Badge>
                    <span className="text-2xl font-bold text-adventure-orange">{route.price}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Icon name="MapPin" size={16} className="mr-2 text-adventure-orange" />
                      {route.distance}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2 text-adventure-orange" />
                      {route.duration}
                    </div>
                  </div>
                  <Button className="w-full bg-forest-green hover:bg-forest-green/90">
                    Забронировать тур
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Инструктаж и безопасность */}
      <section id="safety" className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Безопасность — <span className="text-adventure-orange">приоритет</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Профессиональный инструктаж и качественная защитная экипировка
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Shield', title: 'Защита', desc: 'Полный комплект защитной экипировки' },
              { icon: 'Users', title: 'Инструктаж', desc: 'Обязательный инструктаж перед поездкой' },
              { icon: 'Phone', title: 'Связь', desc: 'Постоянная связь с базой во время тура' },
              { icon: 'Heart', title: 'Медпомощь', desc: 'Аптечка первой помощи и медстраховка' }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-center">
                <CardContent className="p-8">
                  <Icon name={item.icon as any} size={48} className="mx-auto mb-4 text-adventure-orange" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Цены и тарифы */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Тарифы и <span className="text-adventure-orange">цены</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Эконом',
                price: '2800₽',
                period: '/день',
                features: ['Мотоцикл эконом класса', 'Базовая защита', 'Карта маршрутов', 'Техподдержка']
              },
              {
                title: 'Стандарт',
                price: '3500₽',
                period: '/день',
                features: ['Мотоцикл премиум', 'Полная защита', 'GPS-навигация', 'Инструктор', 'Страховка'],
                popular: true
              },
              {
                title: 'Премиум тур',
                price: '8500₽',
                period: '/день',
                features: ['Эксклюзивный маршрут', 'Личный гид', 'Питание включено', 'Фотосессия', 'Трансфер']
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-adventure-orange scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-adventure-orange">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-charcoal">{plan.title}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-adventure-orange">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="mr-3 text-forest-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-adventure-orange hover:bg-adventure-orange/90' : 'bg-forest-green hover:bg-forest-green/90'}`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-gradient-to-r from-forest-green to-forest-green/90 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Свяжитесь с <span className="text-adventure-orange">нами</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Готовы к приключению? Мы поможем организовать незабываемый тур
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-8">
                <Icon name="Phone" size={40} className="mx-auto mb-4 text-adventure-orange" />
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <p className="text-gray-200">+7 (999) 123-45-67</p>
                <p className="text-sm text-gray-300">Ежедневно 9:00-21:00</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-8">
                <Icon name="MapPin" size={40} className="mx-auto mb-4 text-adventure-orange" />
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p className="text-gray-200">ул. Приключений, 123</p>
                <p className="text-sm text-gray-300">Москва, Россия</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-center md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <Icon name="Mail" size={40} className="mx-auto mb-4 text-adventure-orange" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-200">info@enduro.ru</p>
                <p className="text-sm text-gray-300">Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-adventure-orange hover:bg-adventure-orange/90 text-lg px-8 py-6">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mountain" size={24} className="text-adventure-orange" />
                <span className="text-xl font-bold">ENDURO ADVENTURES</span>
              </div>
              <p className="text-gray-400">Приключения начинаются здесь</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-adventure-orange">Аренда мотоциклов</a></li>
                <li><a href="#" className="hover:text-adventure-orange">Аренда квадроциклов</a></li>
                <li><a href="#" className="hover:text-adventure-orange">Групповые туры</a></li>
                <li><a href="#" className="hover:text-adventure-orange">Индивидуальные маршруты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-adventure-orange">О компании</a></li>
                <li><a href="#" className="hover:text-adventure-orange">Правила аренды</a></li>
                <li><a href="#" className="hover:text-adventure-orange">Безопасность</a></li>
                <li><a href="#" className="hover:text-adventure-orange">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-adventure-orange cursor-pointer" />
                <Icon name="Youtube" size={24} className="text-gray-400 hover:text-adventure-orange cursor-pointer" />
                <Icon name="Facebook" size={24} className="text-gray-400 hover:text-adventure-orange cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Enduro Adventures. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;