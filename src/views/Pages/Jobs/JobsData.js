const jobsData = [
	{
		id: 0,
		title: 'PHP - developer',
    imgPath: 'assets/img/facebook.png',
		publicDate: '13 октября 2018',
		competence: 'Backend',
		skills: [
			{
				name: 'PHP 7.2'
			},
			{
				name: 'Composer'
			},
			{
				name: 'Yii 2'
			}
		],
		description: `В отдел развития информационных систем требуется разработчик. Мы
					занимаемся автоматизацией процессов компании на всех уровнях: от
					подачи рекламного объявления, до вручения товара в руки покупателю.
					(поставщики, клиенты, магазины, склады, наличие)`,
		priceFrom: '200 000 руб.',
    priceTo: '300 000 руб.'
	},
	{
		id: 1,
		title: 'GO - developer',
		imgPath: 'assets/img/google.png',
		publicDate: '13 октября 2018',
		competence: 'Backend',
		skills: [
			{
				name: 'GO'
			},
			{
				name: 'Tarantool'
			},
      {
        name: 'ElasticSearch'
      },
			{
				name: 'NoSql'
			},
      {
        name: 'Высокогруженные системы'
      }
		],
		description: `В отдел развития информационных систем требуется разработчик. Мы
					занимаемся автоматизацией процессов компании на всех уровнях: от
					подачи рекламного объявления, до вручения товара в руки покупателю.
					(поставщики, клиенты, магазины, склады, наличие)`,
		priceFrom: '200 000 руб.',
		priceTo: '300 000 руб.'
	}
];

export default jobsData;
